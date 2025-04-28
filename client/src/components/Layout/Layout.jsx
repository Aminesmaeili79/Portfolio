// client/src/components/Layout/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import CreateBlogButton from '../Blogs/CreateBlogButton';

function Layout() {
    return (
        <div className="absolute left-0 top-0 w-full h-full flex flex-col container">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            <CreateBlogButton />
        </div>
    );
}

export default Layout;