'use strict'

var information = 'information';
    
angular.module('app')
  .controller(information, CountryInformation);

CountryInformation.$inject= ['$scope', '$http', '$routeParams', 'countries'];
    
function CountryInformation(scope, http, routeParams, countries){
      countries.get().then(function(response){
        scope.name = routeParams.countryName;
          scope.country = response.data.filter(function(entry){
            return entry.name === scope.name;
          })[0];
      });
    
};