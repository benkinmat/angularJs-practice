'use strict';

var shell = "shell";

angular.module('app.layout')
    .controller(shell, ShellLayout);
    
ShellLayout.$inject = ['$rootScope'];

function ShellLayout(rootScope){}