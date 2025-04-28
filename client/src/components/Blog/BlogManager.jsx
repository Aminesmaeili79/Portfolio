// client/src/components/Blog/BlogManager.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { blogPageContext } from "../contexts/BlogPageContext.jsx";

function BlogCard({ blog }) {
    const navigate = useNavigate();
    const { setBlogPage } = useContext(blogPageContext);

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

    const handleSetBlogPage = () => {
        setBlogPage(blog);
        navigate(`/blog/${blog._id}`);
    };

    // Handle author display with fallbacks
    const authorName = blog.authorName || blog.author?.username || 'Unknown Author';

    return (
        <div
            onClick={handleSetBlogPage}
            className="bg-[#31343D] p-6 rounded-xl cursor-pointer hover:bg-[#404350] transition-colors"
        >
            <div>
                <h2 className="font-bold">{blog.title}</h2>
                <h4 className="font-extralight italic mb-4">
                    last updated: {formatDate(blog.createdAt)} by {authorName}
                </h4>
            </div>
            <p className="mt-2">{blog.description}</p>
            <div className="flex gap-2 mt-2">
                {blog.tags?.map((tag, index) => (
                    <span
                        className="text-sm bg-[#1c1e26] px-2 py-1 rounded-full text-[#128d8a]"
                        key={index}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default BlogCard;