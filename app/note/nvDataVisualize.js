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
                var outerWidth = 1000;
                var outerHeight = 500;
                var margin = {
                    left: 90,
                    top: 30,
                    right: 150,
                    bottom: 30
                };
                var outerRadius = 150;
                var innerRadius = 50;

                var colorColumn = "name";
                var pieKey = "name";
                var pieValue = "value";

                var innerWidth = outerWidth - margin.left - margin.right;
                var innerHeight = outerHeight - margin.top - margin.bottom;

                var pie = d3.pie();
                var arc = d3.arc()
                    .outerRadius(outerRadius)
                    .innerRadius(innerRadius);

                var svg = d3.select("body").append("svg")
                    .attr("width", outerWidth)
                    .attr("height", outerHeight);


                var xScale = d3.scaleOrdinal().range([0, innerWidth]);
                var colorScale = d3.scaleOrdinal(d3.schemeCategory10);

                elements.on('$destroy', function() {
                    // $interval.cancel(timeoutId);
                    console.log("destroy");
                    svg.selectAll("*").remove();
                });

                render(scope.data);
                renderWhenDateUpdated('data');

                function renderWhenDateUpdated(data) {
                    // window.onresize = function() {
                    //     return scope.$apply();
                    // };

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

                    if (!data) return;
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

                    slice.exit().remove();
                    pieG.exit().remove();
                }



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

                // var labelArc = d3.arc()
                //     .outerRadius(radius - 10)
                //     .innerRadius(0);

                // var svg = d3.select("body").append("svg")
                //     .attr("width", width)
                //     .attr("height", height)
                //     .append("g")
                //     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

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

                //     g.append("text")
                //         .attr("transform", function(d) {
                //             return "translate(" + labelArc.centroid(d) + ")";
                //         })
                //         .attr("dy", ".35em")
                //         .text(function(d) {
                //             return d.data.name;
                //         });
                // }
            }
        };
    });
