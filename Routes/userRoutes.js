const express = require('express');
const { login, signUp } = require('../Controller/authController');
const userRouter = express.Router()


userRouter.post('/signup', signUp);
userRouter.post('/login', login);
// userRouter.post('/requestBid/:id', signUp);

module.exports = userRouter









