import React, {useContext} from 'react'
import BlogManager from "../BlogManager/BlogManager.jsx";
import "./blogs.css"
import BackgroundBlob from "../ui/BackgroundBlob.jsx";
import BlogCard from "../BlogManager/BlogManager.jsx";
import {blogPageContext} from "../contexts/BlogPageContext.jsx";

const Blogs = () => {


    return (
        <section className="section__blog w-[100vw] flex justify-between px-[12em] gap-8 mt-[16em]">
            <div className="blog__redirection flex flex-col gap-4">
                <h2>Read my latest blogs</h2>
                <p>Yes!!! I do love writting blogs about what I learn, my day to day improvements and what I find interesting :)</p>
                <button className="w-fit">View more</button>
            </div>
            <div className="blog__recent">
                <div className="blogs-recent grid gap-4 grid-cols-2 grid-rows-2">
                    <BlogCard/>
                </div>
            </div>
            <BackgroundBlob position={"right-[-10%] translate-y-[50%]"} color={"#128d8a"}/>
        </section>
    )
}
export default Blogs
