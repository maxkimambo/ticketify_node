/**
 * Created by max on 30.01.16.
 */
"use strict";

var mongoose = require('mongoose');
var userModel = require('../models/users');


function Repository(){
}

Repository.prototype.save = function(registrationObject, cb){

    var user = new userModel(registrationObject);

    user.save(function(err, res, numAffected){
        cb(err,res, numAffected);
    });
    return user;
};

module.exports = Repository;