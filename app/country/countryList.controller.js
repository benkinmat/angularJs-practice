'use strict';

var countryListCtrl = 'countryListCtrl';

angular.module('app.country')
  .controller(countryListCtrl, CountryList);

CountryList.$inject = ['$scope', 'countries'];

function CountryList(scope, countries){
    scope.countries = countries;
}