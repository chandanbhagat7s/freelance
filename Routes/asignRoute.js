const express = require('express');
const { createProject, getAllProject, getProjectById, getProjectByIdAndHide, getProjectByIdAndUnhide, getProjectByIdAndUpdate } = require('../Controller/asignerController');
const { getVerified, getaccess } = require('../middleware/protect');
const { signUp, login } = require('../Controller/authController');
const assignRoute = express.Router()


assignRoute.post('/signup', signUp);
assignRoute.post('/login', login);
assignRoute.get('/getAllProject', getAllProject);
assignRoute.get('/getProject/:bid', getProjectById);
assignRoute.use(getVerified, getaccess('assign'))
assignRoute.post('/createProject', createProject);

assignRoute.patch('/updateProject/:bid', getProjectByIdAndUpdate);
assignRoute.patch('/hidebid/:bid', getProjectByIdAndHide);
assignRoute.patch('/unhideBid/:bid', getProjectByIdAndUnhide);

module.exports = assignRoute









