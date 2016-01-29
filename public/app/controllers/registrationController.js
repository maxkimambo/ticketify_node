/**
 * Created by max on 29.01.16.
 */
"use strict";

angular.module('ticketify').controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['dataService', 'urlService'];

function RegistrationController(data, url){
    var register = this;
    var baseUrl = url.getHost();

    register.submit = function(register){

        var registrationData = {};
        registrationData.register = register;

        data.post( baseUrl +'register', registrationData).success(function(res){
            console.log(res);
        }).error(function (err){
            console.log(err);
        })
    }
}



//
//RegistrationController.prototype.submit = function(register){
//
//};

RegistrationController.prototype.validate = function(register){
     var isDisabled = false;
        if(register.phone)

        if (register.password !== register.passwordConfirm){
            isDisabled = true;
        }
        if (!register.termsConditions){
            isDisabled = true;
        }

    return isDisabled;
};