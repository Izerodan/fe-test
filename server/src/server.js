#!/usr/bin/env node

(function() {
    'use strict';

    let express = require('express');
    let logger  = require('morgan');

    let config         = require('./config');
    let GodController  = require('./controller/god.controller');
    let godController  = new GodController();

    // Creating an Express instance
    let app = express();

    // Registering application's handlers
    app.use(logger(config.environment));

    // Enabling the Cross-Origin access to this server (As it listens to other port than the client one)
    app.use((req, res, next) => {
        // Website allowed
        res.setHeader('Access-Control-Allow-Origin', '*');
        // Request methods allowed
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        // Request headers allowed
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        // Pass to next layer of middleware
        next();
    });

    // Setting application's routes
    /* GET users listing. */
    app.get('/god', godController.getAll);
    /* GET a single user */
    app.get('/god/:id', godController.getById);

    // Setting unmapped routes to be forwarded as a 404 error
    app.use((req, res, next) => {
        let err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    // Setting application's error handler
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.send({error: err.message});
    });

    // Instructing the application to start listening for connections
    app.listen(config.port);
})();