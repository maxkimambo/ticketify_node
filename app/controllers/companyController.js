/**
 * Created by max on 29.01.16.
 */
'use strict';

var express = require('express'),
    router = express.Router(),
    config = require('../../config/config'),
    userRepo = require('../lib/CompanyRepository'),
    userModel = require('../models/users');

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
    var uRepo = new userRepo(userModel);

    uRepo.save(req.body.register, function(err, result, num){
        console.log(err);
        console.log(result);
        console.log(num);
        return res.json(result);
    });
   //// var u = new user(req.body.register);
   ////
   ////var result = u.save(function(err, register, numAffected){
   ////
   ////     if(err){
   ////         return next(err);
   ////     }
   ////     if (numAffected){
   ////         return res.json(register);
   ////     }
   ////
   //// });
   //
   // console.log(result);

});
