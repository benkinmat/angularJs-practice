'use strict'

var sidebar = "sidebar";

angular.module('app')
    .controller(sidebar, SideBarRoute);
    
SideBarRoute.$inject = ['routes'];

function SideBarRoute(routes){
    var vm = this;
    
    vm.navRoutes = routes;
}