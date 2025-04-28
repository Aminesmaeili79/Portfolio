const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        minlength: [3, 'Title must be at least 3 characters long'],
        maxlength: [100, 'Title cannot exceed 100 characters']
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Author is required']
    },
    authorName: {
        type: String,
        required: [true, 'Author name is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true,
    },
    content: {
        type: String,
        required: [true, 'Content is required'],
        trim: true
    },
    tags: [{
        type: String,
        trim: true
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

blogSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;