const express = require('express');
const cors = require('cors');
const blogRoutes = require('./routes/blogRoutes');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors({
    origin: ['https://aminesmaeili79.github.io', 'http://localhost:5173'],
    credentials: true
}));

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/api/blogs', blogRoutes);
app.use('/api/auth', authRoutes);

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

app.use(errorHandler);

module.exports = app;