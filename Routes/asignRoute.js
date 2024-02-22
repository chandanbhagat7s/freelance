const express = require('express');
const userRouter = express.Router()


userRouter.post('/login', login);
userRouter.post('/signup', signUp);
userRouter.post('/requestBid/:id', signUp);

module.exports = userRouter









