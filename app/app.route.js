var app = angular.module('app');

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/country', {
            templateUrl: 'app/country/list.html'
        })
        .when('/country/:countryName', {
            templateUrl: 'app/country/information.html'
        })
        .when('/note', {
            templateUrl: 'app/components/note.html'
        })
        .otherwise({
            redirectTo: '/note'
        })
}]);