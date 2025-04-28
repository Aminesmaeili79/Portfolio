import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BlogEditor = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const token = localStorage.getItem('token');
            const tagsArray = tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '');

            const response = await axios.post('/api/blogs', {
                title,
                description,
                content,
                tags: tagsArray
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            navigate(`/blog/${response.data.data.blog._id}`);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to create blog post');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#1c1e26] py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-white mb-8">Create New Blog Post</h1>

                {error && (
                    <div className="bg-red-500 text-white p-4 rounded-md mb-6">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-white mb-2">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-4 py-2 rounded-md bg-[#31343D] text-white border border-gray-700 focus:outline-none focus:border-[#128d8a]"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-white mb-2">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-4 py-2 rounded-md bg-[#31343D] text-white border border-gray-700 focus:outline-none focus:border-[#128d8a]"
                            rows="3"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-white mb-2">Content (Markdown)</label>
                        <MDEditor
                            value={content}
                            onChange={setContent}
                            height={400}
                            preview="live"
                        />
                    </div>

                    <div>
                        <label className="block text-white mb-2">Tags (comma-separated)</label>
                        <input
                            type="text"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            className="w-full px-4 py-2 rounded-md bg-[#31343D] text-white border border-gray-700 focus:outline-none focus:border-[#128d8a]"
                            placeholder="react, javascript, web development"
                        />
                    </div>

                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="px-6 py-2 rounded-md bg-gray-600 text-white hover:bg-gray-700"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`px-6 py-2 rounded-md bg-[#128d8a] text-white hover:bg-[#0f6b69] ${
                                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                        >
                            {isSubmitting ? 'Creating...' : 'Create Blog Post'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BlogEditor;