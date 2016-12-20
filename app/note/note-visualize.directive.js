'use strict';

angular.module('app.note')
    .directive("barChart", function() {
        return {
            restrict: 'AE',
            // templateNamespace: 'html',
            scope: {
                data: '='
            },
            link: function postLink(scope, elements, attrs) {
                var outerWidth = 600;
                var outerHeight = 400;
                var margin = {
                    left: 90,
                    top: 30,
                    right: 150,
                    bottom: 30
                };
                var outerRadius = 200;
                var innerRadius = 100;

                var colorColumn = "name";
                var pieKey = "name";
                var pieValue = "value";

                var innerWidth = outerWidth - margin.left - margin.right;
                var innerHeight = outerHeight - margin.top - margin.bottom;

                var pie = d3.pie();
                var arc = d3.arc()
                    .outerRadius(outerRadius)
                    .innerRadius(innerRadius);

                var svg = d3.select("#note-graph")
                    .append("div")
                    .classed("svg-container", true)
                    .append("svg")
                    .attr("preserveAspectRatio", "xMinYMin meet")
                    .attr("viewBox", "0 0 " + " " + outerWidth + " " + outerHeight)
                    //class to make it responsive
                    .classed("svg-content-responsive", true);

                var colorScale = d3.scaleOrdinal(d3.schemeCategory10);

                render(scope.data);
                renderWhenDateUpdated('data');

                elements.on('$destroy', function() {
                    d3.selectAll("svg").remove();
                });

                function renderWhenDateUpdated(data) {
                    scope.$watch(data, function(newVals, oldVals) {
                        return render(newVals);
                    }, true);
                }

                function render(data) {
                    svg.selectAll("*").remove();
                    if (!data) return;

                    var g = svg.append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                    var pieG = g.append("g")
                        .attr("transform", "translate(" + innerWidth / 2 + "," + innerHeight / 2 + ")");

                    colorScale.domain(data.map(function(d) {
                        return d[colorColumn];
                    }));

                    pie.value(function(d) {
                        return d[pieValue];
                    });

                    var slice = pieG.selectAll(".arc")
                        .data(pie(data))
                        .enter();

                    slice.append("path")
                        .attr("d", arc)
                        .attr("fill", function(d) {
                            return colorScale(d.data[colorColumn]);
                        });

                    slice.append("text")
                        .attr("transform", function(d) {
                            return "translate(" + arc.centroid(d) + ")";
                        })
                        .attr("dy", ".35em")
                        .text(function(d) {
                            return d.data[pieKey];
                        });

                    g.exit().remove();
                }
            }
        };
    });
