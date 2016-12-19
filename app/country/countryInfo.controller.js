'use strict';

var countryInfoCtrl = 'countryInfoCtrl';

angular.module('app.country')
  .controller(countryInfoCtrl, CountryInformation);

CountryInformation.$inject = ['$scope', 'country'];

function CountryInformation(scope, country) {
  scope.country = country;
}
