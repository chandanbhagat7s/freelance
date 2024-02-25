
const express = require('express');
const { home, login, signup, freeSignup, assignSignup } = require('../Controller/viewController');
const viewRoute = express.Router()


viewRoute.get('/', home);
viewRoute.get('/login', login);
viewRoute.get('/assignsignup', assignSignup);
viewRoute.get('/freesignup', freeSignup);
// viewRoute.get('/login', login);
// viewRoute.post('/requestBid/:id', signUp);

module.exports = viewRoute;
















