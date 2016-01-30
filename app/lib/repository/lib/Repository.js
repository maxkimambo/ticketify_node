/**
 * Created by max on 30.01.16.
 */
"use strict";
var q = require('q');

function Repository(model, entity) {
    this.repoModel = model;
    this.entity = entity;
}
/**
 * Saves an entity to the mongodb
 * @param entity
 * @returns {*} promise(data) or reject(err)
 */
Repository.prototype.save = function () {

    var deferred = q.defer();

    var entitySchema = new this.repoModel(this.entity);

    entitySchema.save(function (err, res, numAffected) {
        if (err) {
            deferred.reject(err);
        }
        var data = {};
        data.result = res;
        data.numAffected = numAffected;
        deferred.resolve(data);
    });

    return deferred.promise;
};

/**
 * Finds all the documents in a collection.
 * @returns {*}
 */
Repository.prototype.find = function (filter) {

    var deferred = q.defer();

    this.repoModel.find(filter,function (err, result) {
        if (err) {
            return deferred.reject(err);
        }
        return deferred.resolve(result);
    });

    return deferred.promise;
};
/**
 * Finds One document give a criteria
 * @param filter Object {property: 'value'}
 * @returns {*}
 */
Repository.prototype.findOne = function (filter) {
    var deferred = q.defer();

    this.repoModel.findOne(filter, function (err, result) {
        if (err) {
            deferred.reject(err);
        }
        deferred.resolve(result);
    });
    return deferred.promise;
};

/**
 * Fetches document by its Id.
 * @param id
 * @returns {*}
 */
Repository.prototype.findById = function (id) {

    var deferred = q.defer();

    this.repoModel.findOne(id, function (err, result) {
        if (err) {
            deferred.reject(err);
        }
        deferred.resolve(result);
    });
    return deferred.promise;
};

/**
 * Updates one or many documents based on criteria
 * @param criteria
 * @param payload
 * @returns {*}
 */
Repository.prototype.update = function (criteria, payload) {
    var deferred = q.defer();

    this.repoModel.update(criteria, payload, function(err,numAffected, response){
        if (err){
            return deferred.reject(err);
        }
        deferred.resolve({numAffected: numAffected, response: response});
    });
    return deferred.promise;
};

/**
 * Deletes entity from the database by its Id.
 * @param id
 */
Repository.prototype.delete = function (id) {
    var deferred = q.defer();

    this.repoModel.remove({id: id}, function(err, res){
        if (err){
            return deferred.reject(err);
        }
        return deferred.resolve(res);
    });

    return deferred.promise;
};

module.exports = Repository;