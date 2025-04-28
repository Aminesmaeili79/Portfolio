// client/src/App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import HomePage from "./components/Home/HomePage.jsx";
import BlogPage from "./components/Blogs/BlogPage.jsx";
import BlogsHome from "./components/Blogs/BlogsHome.jsx";
import BlogEditor from "./components/Blogs/BlogEditor.jsx";
import Login from "./components/auth/Login.jsx";
import Register from "./components/auth/Register.jsx";
import PrivateRoute from "./components/auth/PrivateRoute.jsx";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/blogs" element={<BlogsHome />} />
                <Route path="/blog/:id" element={<BlogPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/create-blog"
                    element={
                        <PrivateRoute>
                            <BlogEditor />
                        </PrivateRoute>
                    }
                />
            </Route>
        </Routes>
    );
}

export default App;