'use strict';

var app = angular.module('app.layout');

app.constant('layout.routes', getRoutes());
app.config(['$routeProvider', 'layout.routes', routeConfiguaration]);

function getRoutes() {
    return [{
        url: '/layout/home',
        config: {
            templateUrl: 'app/layout/home.html',
            description: "Home"
        }
    }, {
        url: '/layout/about',
        config: {
            templateUrl: 'app/layout/about.html',
            description: "About"
        }
    }];
}

function routeConfiguaration($routeProvider, routes) {
    routes.forEach(function(route) {
        $routeProvider.when(route.url, route.config);

        $routeProvider.otherwise({
            redirectTo: '/layout/home'
        });
    });
}