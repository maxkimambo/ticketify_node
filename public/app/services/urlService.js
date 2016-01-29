/**
 * Created by max on 29.01.16.
 */
(function () {
    "use strict";

    angular.module('ticketify').factory('urlService', urlService);

    urlService.$inject = ['$location'];

    function urlService ($location){

        var factory = {
            getHost: getHost
        };

        function getHost(){
            var url = $location.protocol() + '://' + $location.host() + ':' + $location.port() + '/';
            return url;
        }

        return factory;
    }
})();