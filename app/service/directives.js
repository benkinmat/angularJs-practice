'use strict'

var app = angular.module("app");

// BarChart.$inject = [];
app.directive("barChart", function() {
    return {
        restrict: 'AE',
        // templateNamespace: 'html',
        scope: {
            data: '='
        },
        link: function postLink(scope, elements, attrs) {
            var width = 500,
                height = 500,
                radius = Math.min(width, height) / 2;

            var color = d3.scaleOrdinal(d3.schemeCategory20);

            var arc = d3.arc()
                .outerRadius(radius - 10)
                .innerRadius(0);

            //pie mapping key - value
            var pie = d3.pie()
                .value(function(d) {
                    return d.value;
                });

            var labelArc = d3.arc()
                .outerRadius(radius - 10)
                .innerRadius(0);

            var svg = d3.select("body").append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

            render(scope.data);

            renderWhenDateUpdated('data');

            function renderWhenDateUpdated(data) {
                window.onresize = function() {
                    return scope.$apply();
                };

                scope.$watch(data, function(newVals, oldVals) {
                    return render(newVals);
                }, true);
            }

            function render(data) {
                svg.selectAll('*').remove();

                if (!data) return;

                //use pie to generate arc datas
                var g = svg.selectAll(".arc")
                    .data(pie(data))
                    .enter()
                    .append("g");

                //main - draw
                g.append("path")
                    .attr("d", arc)
                    .style("fill", function(d) {
                        return color(d.data.name);
                    });

                g.append("text")
                    .attr("transform", function(d) {
                        return "translate(" + labelArc.centroid(d) + ")";
                    })
                    .attr("dy", ".35em")
                    .text(function(d) {
                        return d.data.name;
                    });
            }
        }
    };
});







// var outerWidth = 500;
// var outerHeight = 250;
// var margin = {
//     left: 90,
//     top: 30,
//     right: 150,
//     bottom: 30
// };

// var radiusMax = 100;

// var innerWidth = outerWidth - margin.left - margin.right;
// var innerHeight = outerHeight - margin.top - margin.bottom;

// var width = 500,
//     height = 500,
//     radius = Math.min(width, height) / 2;

// var color = d3.scaleOrdinal(d3.schemeCategory20);

// var arc = d3.arc()
//     .outerRadius(radius - 10)
//     .innerRadius(0);

// //pie mapping key - value
// var pie = d3.pie()
//     .value(function(d) {
//         return d.value;
//     });

// var svg = d3.select("body").append("svg")
//     .attr("width", outerWidth)
//     .attr("height", outerHeight)
// var group = svg.append("g")
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// var xAxisG = group.append("g")
//     .attr("class", "x axis")
//     .attr("transform", "translate(0," + innerHeight + ")");
// var pieG = group.append("g");

// var colorLegendG = group.append("g")
//     .attr("class", "color-legend")
//     .attr("transform", "translate(235, 20)");

// var xScale = d3.scaleOrdinal().range([0, innerWidth]);
// var radiusScale = d3.scaleSqurt.range([0, radiusMax]);

// var xAxis = d3.svg.axis().scale(xScale).orient("bottom")
//     .outerTickSize(0);

// render(scope.data);

// renderWhenDateUpdated('data');

// function renderWhenDateUpdated(data) {
//     window.onresize = function() {
//         return scope.$apply();
//     };

//     scope.$watch(data, function(newVals, oldVals) {
//         return render(newVals);
//     }, true);
// }

// function render(data) {
//     svg.selectAll('*').remove();

//     if (!data) return;

//     //use pie to generate arc datas
//     var g = svg.selectAll(".arc")
//         .data(pie(data))
//         .enter()
//         .append("g");

//     //main - draw
//     g.append("path")
//         .attr("d", arc)
//         .style("fill", function(d) {
//             return color(d.data.name);
//         });
// }
