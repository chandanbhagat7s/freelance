const express = require('express');
const { login, signUp, logout } = require('../Controller/authController');
const { requestForTheProject } = require('../Controller/userController');
const { getVerified } = require('../middleware/protect');
const userRouter = express.Router()

userRouter.get('/logout', logout);

userRouter.post('/signup', signUp);
userRouter.post('/login', login);
userRouter.use(getVerified).post('/createProjectRequest', requestForTheProject);
// userRouter.post('/requestBid/:id', signUp);

module.exports = userRouter









