import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import './blog-manager.css'
import {blogPageContext} from "../contexts/BlogPageContext.jsx";
import { useNavigate } from 'react-router-dom';

function BlogCard() {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/blogs`)
            setBlogs(response.data.data.blogs)
        }

        fetchBlogs();
    }, []);

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

    const { setBlogPage } = useContext(blogPageContext);

    const handleSetBlogPage = (blog) => {
        setBlogPage(blog);
        navigate(`/blog/${blog._id}`); // Navigate to the blog page
    }

    return (
        <>
            { blogs.map(blog => (
                <div onClick={() => handleSetBlogPage(blog)} className="bg-[#31343D] p-6 rounded-xl cursor-pointer" key={blog._id}>
                    <div className="">
                        <h2 className="font-bold" key={blog._id}>{blog.title}</h2>
                        <h4 className="font-extralight italic mb-4" key={blog.date}>last updated: {formatDate(blog.createdAt)}</h4>
                    </div>
                    <p className="mt-2">{blog.description}</p>
                    <div className="flex gap-2 mt-2">
                        {blog.tags.map((tag, index) => (
                            <a className="cursor-pointer" key={index}>
                                {tag}
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}

export default BlogCard;