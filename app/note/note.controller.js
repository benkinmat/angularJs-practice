'use strict';

var noteCtrl = "noteCtrl";
angular.module('app.note')
    .controller(noteCtrl, Note);

Note.$inject = ['$scope'];

function Note(scope) {
    // scope.total = 0;
    scope.print = false;
    scope.data = [];
    scope.entry = [];
    scope.total = 0;
    totalValues();

    scope.addEntry = function() {
        scope.data.push({
            name: scope.entry.name,
            value: scope.entry.value
        });

        scope.entry.name = '';
        scope.entry.value = '';
    };

    scope.removeEntry = function(entry) {
        scope.data.splice(scope.data.indexOf(entry), 1);
    };

    scope.removeAll = function() {
        scope.data.splice(0, scope.data.length);
        //scope.data = [];
    };

    scope.printContent = function() {
        window.print();
    };

    function totalValues() {
        scope.$watch('data', function(newVals, oldVals) {
            scope.total = 0;
            newVals.forEach(function(elements) {
                // console.log(elements); 
                scope.total += parseFloat(elements.value);
            });
        }, true);
    }
}
