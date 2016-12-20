'use strict';

angular.module('app')
    .factory('DataService', ['$http', factory]);

function factory($http){
    var service = {
        getCountries: getCountries
    };

    return service;

    function getCountries(){
        return $http({
            method: 'GET',
            url: 'https://restcountries.eu/rest/v1/all'
        });
    }
}
