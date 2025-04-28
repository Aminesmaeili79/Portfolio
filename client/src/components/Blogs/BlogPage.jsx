import React, { useContext, useState, useEffect } from 'react';
import { blogPageContext } from "../contexts/BlogPageContext";
import MDEditor from '@uiw/react-md-editor';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

function BlogPage() {
    const { blogPage } = useContext(blogPageContext);
    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const response = await axios.get('/api/auth/current-user', {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    setCurrentUser(response.data.data.user);
                    setIsAuthenticated(true);
                } catch (error) {
                    console.error('Authentication error:', error);
                    localStorage.removeItem('token');
                    setIsAuthenticated(false);
                }
            }
        };

        checkAuth();
    }, []);

    useEffect(() => {
        if (blogPage) {
            setContent(blogPage.content);
        }
    }, [blogPage]);

    if (!blogPage) {
        return <div>Loading...</div>;
    }

    const handleSave = async () => {
        setIsSaving(true);
        try {
            const token = localStorage.getItem('token');
            const response = await axios.patch(`/api/blogs/${blogPage._id}`, {
                content: content
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            blogPage.content = content;
            blogPage.updatedAt = new Date();
            setIsEditing(false);
        } catch (error) {
            console.error('Error saving blog:', error);
            alert('Failed to save changes. Please try again.');
        } finally {
            setIsSaving(false);
        }
    };

    const canEdit = isAuthenticated && currentUser?.id === blogPage.author._id;

    return (
        <div className="flex flex-col items-center text-center p-6 w-full">
            <div className="w-full mb-4">
                <h1 className="text-3xl font-bold">{blogPage.title}</h1>
                {canEdit && (
                    <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        {isEditing ? 'Cancel' : 'Edit'}
                    </button>
                )}
            </div>

            <h4 className="font-extralight italic mb-4">
                Last updated: {formatDate(blogPage.updatedAt || blogPage.createdAt)}&nbsp;&nbsp;&nbsp;by&nbsp;&nbsp;&nbsp;
                <a href="">{blogPage.authorName || blogPage.author?.username}</a>
            </h4>

            <div className="blog-content mt-[4em] mb-[2em] w-full">
                {isEditing ? (
                    <div className="w-full">
                        <MDEditor
                            value={content}
                            onChange={setContent}
                            height={500}
                            preview="live"
                        />
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={handleSave}
                                disabled={isSaving}
                                className={`bg-green-500 text-white px-6 py-2 rounded 
                                    ${isSaving ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'}`}
                            >
                                {isSaving ? 'Saving...' : 'Save Changes'}
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="prose max-w-none">
                        <ReactMarkdown>{content}</ReactMarkdown>
                    </div>
                )}
            </div>

            <div className="flex gap-2 mt-4">
                {blogPage.tags.map((tag, index) => (
                    <a className="cursor-pointer px-2 py-1" key={index}>
                        {tag}
                    </a>
                ))}
            </div>
        </div>
    );
}

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return date.toLocaleDateString('en-US', options);
};

export default BlogPage;