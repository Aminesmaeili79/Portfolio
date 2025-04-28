// client/src/components/Blogs/BlogsHome.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BlogCard from "../Blog/BlogManager";

const BlogsHome = () => {
    const [blogs, setBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [selectedTag, setSelectedTag] = useState(null);
    const [allTags, setAllTags] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
    }, []);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('/api/blogs');
                const blogsData = response.data.data.blogs;
                setBlogs(blogsData);
                setFilteredBlogs(blogsData);

                // Extract all unique tags
                const tags = new Set();
                blogsData.forEach(blog => {
                    blog.tags?.forEach(tag => tags.add(tag));
                });
                setAllTags([...tags]);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    const handleTagClick = (tag) => {
        if (selectedTag === tag) {
            setSelectedTag(null);
            setFilteredBlogs(blogs);
        } else {
            setSelectedTag(tag);
            const filtered = blogs.filter(blog => blog.tags?.includes(tag));
            setFilteredBlogs(filtered);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#1c1e26] py-12 px-4 flex items-center justify-center">
                <div className="text-white">Loading...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#1c1e26] py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-white">All Blogs</h1>
                    {isAuthenticated && (
                        <Link
                            to="/create-blog"
                            className="bg-[#128d8a] text-white px-6 py-2 rounded-full hover:bg-[#0f6b69] transition-colors"
                        >
                            Create Blog
                        </Link>
                    )}
                </div>

                {/* Tags Filter */}
                {allTags.length > 0 && (
                    <div className="mb-8 flex flex-wrap gap-2 justify-center">
                        {allTags.map((tag, index) => (
                            <button
                                key={index}
                                onClick={() => handleTagClick(tag)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                    selectedTag === tag
                                        ? 'bg-[#128d8a] text-white'
                                        : 'bg-[#31343D] text-gray-300 hover:bg-[#128d8a] hover:text-white'
                                }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                )}

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredBlogs.map(blog => (
                        <BlogCard key={blog._id} blog={blog} />
                    ))}
                    {filteredBlogs.length === 0 && (
                        <div className="col-span-full text-center text-gray-400">
                            No blogs found.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogsHome;