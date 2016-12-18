'use strict';

angular.module('app')
    .factory('DataService', ['$http', factory]);

function factory($http){
    var service = {
        getCountries: getCountries,
        getCountry: getCountry
    };

    return service;

    function getCountries(){
        //return CountriesResource.query().$promise;
        return $http({
            method: 'GET',
            url: 'https://restcountries.eu/rest/v1/all'
        });
    }

    function getCountry(countryName){
        return $http({
            method: 'GET',
            url: 'https://restcountries.eu/rest/v1/name/' + countryName
        });
    }
}
