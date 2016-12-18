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
                    templateUrl: 'app/country/list.html'
                }
            }
        });
        // .state('app.countries.country', {
        //     url: '/:countryId',
        //     views: {
        //         'content@app.countries': {
        //             templateUrl: 'app/country/information.html'
        //         }
        //     }
        // });

    $urlRouterProvider.otherwise('/home');

});