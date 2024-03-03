
const express = require('express');
<<<<<<< HEAD
const { home, login, signup, freeSignup, assignSignup, createBidForm, Profile, requestProject } = require('../Controller/viewController');
const { isLoggedIn, getVerified } = require('../middleware/protect');
const viewRoute = express.Router()




viewRoute.use(isLoggedIn).get('/', home);
viewRoute.use(isLoggedIn).get('/profile', Profile);

=======
const { home, login, signup, freeSignup, assignSignup, createBidForm, Profile } = require('../Controller/viewController');
const { isLoggedIn } = require('../middleware/protect');
const viewRoute = express.Router()


viewRoute.use(isLoggedIn).get('/', home);
>>>>>>> 99e263e19acbfb7ac0faf4a31d103a293a1d70d6
viewRoute.get('/login', login);
viewRoute.get('/profile', Profile);
viewRoute.get('/assignsignup', assignSignup);
viewRoute.get('/freesignup', freeSignup);
viewRoute.get('/createBitForm', createBidForm);
<<<<<<< HEAD
viewRoute.get('/requestProject', requestProject);





=======
>>>>>>> 99e263e19acbfb7ac0faf4a31d103a293a1d70d6
// viewRoute.get('/login', login);
// viewRoute.post('/requestBid/:id', signUp);

module.exports = viewRoute;
















