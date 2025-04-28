const express = require('express');
const blogController = require('../controllers/blogController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router
    .route('/')
    .get(blogController.getAllBlogs)
    .post(authMiddleware, blogController.createBlog);

router
    .route('/:id')
    .get(blogController.getBlog)
    .patch(authMiddleware, blogController.updateBlog)
    .delete(authMiddleware, blogController.deleteBlog);

module.exports = router;