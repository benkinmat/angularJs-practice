var app = angular.module('app');

app.constant('routes', getRoutes());
app.config(['$routeProvider', 'routes', routeConfiguaration]);

function getRoutes(){
    return [
    {
        url: '/',
        config: {
            templateUrl: 'app/note/note.html'
        }
    },
    {
        url: '/country',
        config: {
            templateUrl: 'app/country/list.html'
        }
    },
    {
        url: '/country/:countryName',
        config: {
            templateUrl: 'app/country/information.html'
        }
    },
    {
        url: '/note',
        config: {
            templateUrl: 'app/note/note.html'
        }
    }];
}

function routeConfiguaration($routeProvider, routes){
    routes.forEach(function(route){
       $routeProvider.when(route.url, route.config);
       
       $routeProvider.otherwise({redirectTo: '/'});
    });
}