'use strict';

var topnav = "topnav";

angular.module('app.layout')
    .controller(topnav, topnavRoute);
    
topnavRoute.$inject = ['$scope', 'layout.routes'];

function topnavRoute(scope, routes){
    scope.topnavRoutes = routes;
}