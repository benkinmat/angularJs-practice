'use strict';

var topnav = "topnav";

angular.module('app.layout')
    .controller(topnav, TopNav);
    
TopNav.$inject = ['$scope'];

function TopNav(scope){
<<<<<<< HEAD
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
=======
    scope.states = [
        { name: 'Home',     sref: 'app.home'},
        { name: 'About',    sref: 'app.about'}
    ];
>>>>>>> db31b9144b4fecf4fb599a0ffc5eccd6a70902d6
}