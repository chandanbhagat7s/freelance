
const express = require('express');
const { home } = require('../Controller/viewController');
const viewRoute = express.Router()


viewRoute.get('/', home);
// viewRoute.get('/login', login);
// viewRoute.post('/requestBid/:id', signUp);

module.exports = viewRoute;
















