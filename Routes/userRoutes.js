const express = require('express');
const { login, signUp, logout } = require('../Controller/authController');
const userRouter = express.Router()

userRouter.get('/logout', logout);

userRouter.post('/signup', signUp);
userRouter.post('/login', login);
// userRouter.post('/requestBid/:id', signUp);

module.exports = userRouter









