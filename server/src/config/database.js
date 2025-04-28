const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connection = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/blog';
        await mongoose.connect(connection);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

module.exports.connectDB = connectDB;