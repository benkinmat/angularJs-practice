'use strict';

var sidebar = "sidebar";

angular.module('app.layout')
    .controller(sidebar, SideBarRoute);
    
SideBarRoute.$inject = ['$scope'];

function SideBarRoute(scope){}