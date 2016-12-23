'use strict';

var topnav = "topnav";

angular.module('app.layout')
    .controller(topnav, TopNav);
    
TopNav.$inject = ['$scope'];

function TopNav(scope){
    scope.states = {
        introduction: [
            {name: 'Home',      sref: 'app.home'},
            {name: 'About',     sref: 'app.about'}
        ],
        applications: [
            {name: "Country",   sref: 'app.countries'},
            {name: "Note",      sref: 'app.note'}
        ]
    };
}