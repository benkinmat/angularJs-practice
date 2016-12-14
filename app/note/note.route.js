'use strict';

angular.module('app.note')
    .constant('note.routes', getRoutes())
    .config(['$routeProvider', 'note.routes', routeConfiguaration]);

function getRoutes() {
    return [{
        url: '/note',
        config: {
            templateUrl: 'app/note/note.html'
            ,description: "Home"
        }
    }];
}

function routeConfiguaration($routeProvider, routes) {
    routes.forEach(function(route) {
        $routeProvider.when(route.url, route.config);

        $routeProvider.otherwise({
            redirectTo: '/note'
        });
    });
}