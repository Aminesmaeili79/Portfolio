const User = require('../models/User');
const jwt = require('jsonwebtoken');

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'your-secret-key', {
        expiresIn: '30d'
    });
};

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const user = await User.create({
            username,
            email,
            password
        });

        const token = signToken(user._id);

        res.status(201).json({
            status: 'success',
            token,
            data: {
                user: {
                    id: user._id,
                    username: user.username,
                    email: user.email
                }
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'error',
            message: err.message
        });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                status: 'error',
                message: 'Please provide email and password'
            });
        }

        const user = await User.findOne({ email }).select('+password');

        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({
                status: 'error',
                message: 'Incorrect email or password'
            });
        }

        const token = signToken(user._id);

        res.status(200).json({
            status: 'success',
            token,
            data: {
                user: {
                    id: user._id,
                    username: user.username,
                    email: user.email
                }
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'error',
            message: err.message
        });
    }
};

exports.getCurrentUser = async (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            user: {
                id: req.user._id,
                username: req.user.username,
                email: req.user.email
            }
        }
    });
};