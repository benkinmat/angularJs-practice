'use strict'

var list = 'list';

angular.module('app')
  .controller(list, CountryList);
    
CountryList.$inject = ['$scope', 'countries'];

function CountryList(scope, countries){
    countries.get().then(function(response){
      scope.countries = response.data;
    });
};