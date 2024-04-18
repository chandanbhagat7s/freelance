
const express = require('express');
const { home, login, signup, freeSignup, assignSignup, createBidForm, Profile, requestProject, allbids } = require('../Controller/viewController');
const { isLoggedIn, getVerified } = require('../middleware/protect');
const viewRoute = express.Router()




viewRoute.use(isLoggedIn).get('/', home);
viewRoute.use(isLoggedIn).get('/profile', Profile);

viewRoute.get('/login', login);
viewRoute.get('/allBids/:id', allbids);
viewRoute.get('/profile', Profile);
viewRoute.get('/assignsignup', assignSignup);
viewRoute.get('/freesignup', freeSignup);
viewRoute.get('/createBitForm', createBidForm);
viewRoute.get('/requestProject', requestProject);





// viewRoute.get('/login', login);
// viewRoute.post('/requestBid/:id', signUp);

module.exports = viewRoute;
















