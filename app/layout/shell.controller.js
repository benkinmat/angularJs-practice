'use strict'

var shell = "shell";

angular.module('app')
    .controller(shell, ShellLayout);
    
ShellLayout.$inject = ['$rootScope'];

function ShellLayout(rootScope){}