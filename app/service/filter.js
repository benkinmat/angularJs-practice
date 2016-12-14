'use strict';

var trustedHtml = 'trustedHtml';
angular.module('app')
    .filter(trustedHtml, ToBeTrusted);

ToBeTrusted.$inject = ['$sce'];

function ToBeTrusted(sce) {
    return function(text) {
        return sce.trustAsHtml(text);
    };
}
