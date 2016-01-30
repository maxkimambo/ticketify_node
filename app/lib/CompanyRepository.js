/**
 * Created by max on 30.01.16.
 */
"use strict";

var mongoose = require('mongoose');
//var userModel = require('../models/users');


function Repository(model){
    this.repoModel = model;
}

Repository.prototype.save = function(entity, cb){

    var entitySchema = new this.repoModel(entity);

    entitySchema.save(function(err, res, numAffected){
        cb(err,res, numAffected);
    });
    return entitySchema;
};

module.exports = Repository;