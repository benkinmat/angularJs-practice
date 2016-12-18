'use strict';

var app = angular.module('app');

app.config(function statesConfiguration($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('app', {
            url: '',
            views: {
                'header': {
                    templateUrl: 'app/layout/topnav.html'
                },
                'content': {
                    templateUrl: 'app/layout/home.html'
                },
                'footer': {
                    templateUrl: 'app/layout/footer.html'
                }
            }
        })
        .state('app.home', {
            url: '/home',
            views: {
                'content@': {
                    templateUrl: 'app/layout/home.html'
                }
            }
        })
        .state('app.about', {
            url: '/about',
            views: {
                'content@': {
                    templateUrl: 'app/layout/about.html'
                }
            }
        })
        .state('app.countries', {
            url: '/countries',
            views: {
                'content@': {
                    templateUrl: 'app/country/country.html'
                },
                'sideBar@app.countries': {
                    templateUrl: 'app/country/countryList.html',
                    controller: 'countryListCtrl'
                }
            },
            resolve:{
                countries: function(DataService){
                    return DataService.getCountries().then(function(response){
                        return response.data;
                    });
                }
            },
            onEnter: function(){
                console.log("enter country");
            }
        })
        .state('app.countries.country', {
            url: '/{countryName}',
            views: {
                'content@app.countries': {
                    templateUrl: 'app/country/countryInfo.html',
                    controller: 'countryInfoCtrl'

                }
            },
            resolve: {
                country: function (DataService, $stateParams) {
                    return DataService.getCountry($stateParams.countryName).then(function(response){
                        return response.data[0];
                    });
                }
            },
            onEnter: function(){
                console.log("enter country information");
            }
        })
        .state('app.note', {
            url: '/note',
            views: {
                'content@': {
                    templateUrl: 'app/note/note.html',
                    controller: 'noteCtrl'
                }
            }
        });

    $urlRouterProvider.otherwise('/home');

});