'use strict'

var note = "note";
angular.module('app')
    .controller(note, Note);

Note.$inject = ['$scope'];

function Note(scope) {
    // scope.total = 0;
    scope.print = false;
    scope.data = [];
    scope.entry = {
        name: scope.data.name,
        value: scope.data.value
    };

    scope.addEntry = function() {
        scope.data.push({
            name: scope.entry.name,
            value: scope.entry.value
        });
        scope.total += parseFloat(scope.entry.value);

        scope.entry.name = '';
        scope.entry.value = '';
    };

    scope.removeEntry = function(entry) {
        scope.data.splice(scope.data.indexOf(entry), 1);
        scope.total -= parseFloat(entry.score);
    };
    
    scope.printContent = function() {
        window.print();
    };

}
