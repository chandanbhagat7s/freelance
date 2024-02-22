const express = require('express');
const { createProject, getAllProject, getProjectById, getProjectByIdAndHide, getProjectByIdAndUnhide, getProjectByIdAndUpdate } = require('../Controller/asignerController');
const userRouter = express.Router()


userRouter.post('/createProject', createProject);
userRouter.get('/getAllProject', getAllProject);
userRouter.get('/getProject/:bid', getProjectById);

userRouter.patch('/updateProject/:bid', getProjectByIdAndUpdate);
userRouter.patch('/hidebid/:bid', getProjectByIdAndHide);
userRouter.patch('/unhideBid/:bid', getProjectByIdAndUnhide);

module.exports = userRouter









