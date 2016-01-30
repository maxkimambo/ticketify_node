/**
 * Created by max on 29.01.16.
 */
'use strict';

var express = require('express'),
    router = express.Router(),
    config = require('../../config/config'),
    userRepo = require('../lib/repository'),
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

    var saveResult = uRepo.save(req.body.register);

    saveResult.then(function(data){
        console.log(data);
          return res.json(data.result);
    }, function(err){
      //TODO: deal with error handling
    });

});
