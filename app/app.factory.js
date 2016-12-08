'use strict'

angular.module('app')
    .factory('countries', function($http){
       return {
            get: function(){
                return $http.get('https://restcountries.eu/rest/v1/all');
            }
        };
    });