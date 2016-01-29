/**
 * Created by max on 29.01.16.
 */
'use strict';

var express = require('express'),
    router = express.Router();


module.exports = function(app){
   app.use('/', router);
};

router.get('/register', function(req, res, next){

    res.render('registercompany');
});
