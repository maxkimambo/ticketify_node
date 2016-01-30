/**
 * Created by max on 30.01.16.
 */
"use strict";
var q = require('q');

function Repository(model){
    this.repoModel = model;
}

Repository.prototype.save = function(entity){

    var deferred = q.defer();

    var entitySchema = new this.repoModel(entity);

    entitySchema.save(function(err, res, numAffected){
        if (err){
            deferred.reject(err);
        }
        var data = {};
        data.result = res;
        data.numAffected = numAffected;

        deferred.resolve(data);
    });
    return deferred.promise;
};

module.exports = Repository;