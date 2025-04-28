const Blog = require('../models/Blog');

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find()
            .populate('author', 'username')
            .sort({ createdAt: -1 });
        res.status(200).json({
            status: 'success',
            results: blogs.length,
            data: { blogs }
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
};

exports.getBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id)
            .populate('author', 'username');
        if (!blog) {
            return res.status(404).json({
                status: 'error',
                message: 'Blog not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: { blog }
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
};

exports.createBlog = async (req, res) => {
    try {
        const blogData = {
            ...req.body,
            author: req.user._id,
            authorName: req.user.username
        };
        const blog = await Blog.create(blogData);
        res.status(201).json({
            status: 'success',
            data: { blog }
        });
    } catch (err) {
        res.status(400).json({
            status: 'error',
            message: err.message
        });
    }
};

exports.updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({
                status: 'error',
                message: 'Blog not found'
            });
        }

        // Check if user is the author
        if (blog.author.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                status: 'error',
                message: 'Not authorized to edit this blog'
            });
        }

        const updatedBlog = await Blog.findByIdAndUpdate(
            req.params.id,
            { ...req.body, updatedAt: Date.now() },
            { new: true, runValidators: true }
        );

        res.status(200).json({
            status: 'success',
            data: { blog: updatedBlog }
        });
    } catch (err) {
        res.status(400).json({
            status: 'error',
            message: err.message
        });
    }
};

exports.deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({
                status: 'error',
                message: 'Blog not found'
            });
        }

        // Check if user is the author
        if (blog.author.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                status: 'error',
                message: 'Not authorized to delete this blog'
            });
        }

        await Blog.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(400).json({
            status: 'error',
            message: err.message
        });
    }
};