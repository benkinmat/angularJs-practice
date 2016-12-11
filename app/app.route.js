var app = angular.module('app');

app.constant('routes', getRoutes());
app.config(['$routeProvider', 'routes', routeConfiguaration]);

function getRoutes() {
    return [{
        url: '/',
        config: {
            templateUrl: 'app/note/note.html',
            settings: {
                content: '<i class="fa fa-home"></i>'
            }
        }
    }, {
        url: '/about',
        config: {
            templateUrl: 'app/country/list.html',
            settings: {
                content: '<i class="fa fa-globe"></i>'
            }
        }
    }, {
        url: '/contact',
        config: {
            templateUrl: 'app/country/list.html',
            settings: {
                content: '<i class="fa fa-globe"></i>'
            }
        }
    }, {
        url: '/note',
        config: {
            templateUrl: 'app/note/note.html',
            settings: {
                content: '<i class="fa fa-sticky-note"></i>'
            }
        }
    }];
}

function routeConfiguaration($routeProvider, routes) {
    routes.forEach(function(route) {
        $routeProvider.when(route.url, route.config);

        $routeProvider.otherwise({
            redirectTo: '/'
        });
    });
}

// function getRoutes() {
//     return [{
//         url: '/',
//         config: {
//             templateUrl: 'app/note/note.html',
//             settings: {
//                 content: '<i class="fa fa-home"></i>'
//             }
//         }
//     }, {
//         url: '/country',
//         config: {
//             templateUrl: 'app/country/list.html',
//             settings: {
//                 content: '<i class="fa fa-globe"></i>'
//             }
//         }
//     }, {
//         url: '/country/:countryName',
//         config: {
//             templateUrl: 'app/country/information.html'
//         }
//     }, {
//         url: '/note',
//         config: {
//             templateUrl: 'app/note/note.html',
//             settings: {
//                 content: '<i class="fa fa-sticky-note"></i>'
//             }
//         }
//     }];
// }
