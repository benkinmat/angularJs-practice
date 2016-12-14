'use strict';

var about = 'about';

angular.module('app.layout')
    .controller(about, AboutLayout);
    
AboutLayout.$inject = ['$scope'];

function AboutLayout(scope){
    scope.about = {
        author: 'Tuan Anh Ho Dien',
        avatar: 'app/content/layout.avatar.jpg'
    };
}