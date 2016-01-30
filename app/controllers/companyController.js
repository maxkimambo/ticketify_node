/**
 * Created by max on 29.01.16.
 */
'use strict';

var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    config = require('../../config/config'),
    user = require('../models/users');



module.exports = function(app){
   app.use('/', router);
};

router.get('/register', function(req, res, next){

    res.render('registercompany', {
        siteTitle: config.siteTitle
    });
});

router.post('/register', function(req, res, next){

    req.body.register.created_at = new Date();
    req.body.register.updated_at = new Date();

    //console.log(req.body.register);

    var u = new user(req.body.register);

    u.save(function(err, register, numAffected){

        if(err){
            return next(err);
        }
        if (numAffected){
            return res.json(register);
        }

    });

});
