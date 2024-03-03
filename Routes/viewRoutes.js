
const express = require('express');
const { home, login, signup, freeSignup, assignSignup, createBidForm, Profile } = require('../Controller/viewController');
const { isLoggedIn } = require('../middleware/protect');
const viewRoute = express.Router()


viewRoute.use(isLoggedIn).get('/', home);
viewRoute.get('/login', login);
viewRoute.get('/profile', Profile);
viewRoute.get('/assignsignup', assignSignup);
viewRoute.get('/freesignup', freeSignup);
viewRoute.get('/createBitForm', createBidForm);
// viewRoute.get('/login', login);
// viewRoute.post('/requestBid/:id', signUp);

module.exports = viewRoute;
















