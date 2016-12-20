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
                 country: function (countries, $stateParams) {
                    var element = countries.find(function(country){
                        return country.name === $stateParams.countryName;
                    });
                    
                    return element;
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
                },
                'graph@app.note': {
                    templateUrl: 'app/note/noteGraph.html',
                    controller: 'noteCtrl'
                },
                'description@app.note': {
                    templateUrl: 'app/note/noteDescription.html'
                }
            },
            resolve: {
                data: function(){
                    return [];
                }
            }
        })
        .state('app.note.data', {
            url: '/data',
            views: {
                'content@app.note': {
                    templateUrl: 'app/note/noteContentData.html'
                }
            }
        })
        .state('app.note.filter', {
            url: '/filter',
            views: {
                'content@app.note': {
                    templateUrl: 'app/note/noteContentFilter.html'
                }
            }
        });

    $urlRouterProvider.otherwise('/home');

});