import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BackgroundBlob from "../ui/BackgroundBlob.jsx";
import BlogCard from "../Blog/BlogManager.jsx";

const Blogs = () => {
    const [latestBlogs, setLatestBlogs] = useState([]);

    useEffect(() => {
        const fetchLatestBlogs = async () => {
            try {
                const response = await axios.get(`https://portfolio-ofdg.onrender.com/api/blogs`);
                // Get only the 4 most recent blogs
                setLatestBlogs(response.data.data.blogs.slice(0, 4));
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };
        fetchLatestBlogs();
    }, []);

    return (
        <section className="section__blog w-[100vw] flex justify-between px-[12em] gap-8 mt-[16em]">
            <div className="blog__redirection flex flex-col gap-4">
                <h2>Read my latest blogs</h2>
                <p>Yes!!! I do love writing blogs about what I learn, my day to day improvements and what I find interesting :)</p>
                <Link to="/blogs" className="w-fit">
                    <button>View more</button>
                </Link>
            </div>
            <div className="blog__recent">
                <div className="blogs-recent grid gap-4 grid-cols-2 grid-rows-2">
                    {latestBlogs.map(blog => (
                        <BlogCard key={blog._id} blog={blog} />
                    ))}
                </div>
            </div>
            <BackgroundBlob position={"right-[-10%] translate-y-[50%]"} color={"#128d8a"}/>
        </section>
    );
};

export default Blogs;