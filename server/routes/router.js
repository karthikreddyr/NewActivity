const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
 route.get('/', services.main);

 route.get('/login', services.login)

 

/**
 *  @description add users
 *  @method GET /add-activity
 */
route.get('/add-activity', services.add_activity)
route.get('/activities', services.homeRoutes)


/**
 *  @description for update user
 *  @method GET /update-activity
 */
route.get('/update-activity', services.update_activity)


// API
route.post('/api/activity', controller.create);
route.get('/api/activity', controller.find);
route.put('/api/activity/:id', controller.update);
route.delete('/api/activity/:id', controller.delete);
route.post('/api/registration', controller.registration);
route.post('/api/loginUser', controller.login);


module.exports = route