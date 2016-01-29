/**
 * Created by max on 29.01.16.
 */
(function () {
    "use strict";
    angular.module('ticketify').factory('dataService', dataService);

    dataService.$inject = ['$http'];

    function dataService ($http){
        // public api
        var factory = {
            get: get,
            post: post,
            put: put,
            del : del
        };

        return factory;

        // implementation
        // generic get method
        function get(url) {
            var result = $http.get(url).success(function(response) {
                return response.data;
            }).error(function(error) {
                return error;
            });

            return result;
        }

        //Generic post method
        function post(url, data) {
            var result = $http.post(url, data).success(function (response) {
                return response.data;
            }).error(function (error) {
                return error;
            });

            return result;
        }
        // generic put method
        function put(url, data) {

            var result = $http.put(url, data).success(function (response) {
                return response.data;
            }).error(function (error) {
                return error;
            });

            return result;
        }

        // generic delete method
        function del(url) {
            var result = $http.delete(url).success(function (response) {
                return response.data;
            }).error(function (error) {
                return error;
            });

            return result;
        }
        return factory;
    }


})();

