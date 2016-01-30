/**
 * Created by max on 30.01.16.
 */
"use strict";
var q = require('q');

function Repository(model){
    this.repoModel = model;

}
/**
 * Saves an entity to the mongodb
 * @param entity
 * @returns {*} promise(data) or reject(err)
 */
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

Repository.prototype.find = function(){
    var entitySchema = new this.repoModel(entity);


};

Repository.prototype.findAll = function(){


};

Repository.prototype.update = function(){

};

/**
 * Deletes entity from the database
 * @param id
 */
Repository.prototype.delete = function(id){

};


module.exports = Repository;