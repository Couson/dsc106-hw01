/*
D3 Line Chart
*/
// var admisson = [
//     {
//       year: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
//         2014, 2015, 2016, 2017, 2018],
//       numbers: [45636, 41583, 39779, 37009, 34618, 31992, 28758,
//          25097, 22332, 21725, 21590, 20566, 19838, 18147]
//     }
//   ];

// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 700 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.linear().range([0, width]);
var y = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis()
                .scale(x)
                .orient('bottom');

var yAxis = d3.svg.axis()
                .scale(y)
                .orient('left');


var line = d3.svg.line()
                .x(function(d) {
                    return x(d.year);
                })
                .y(function(d) {
                    return y(d.numbers);
                });

var svg = d3.select('#D3LineChartPlaceHolder')
        .append('svg')
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



d3.csv("data.csv", function(data) {
    data.forEach(function(d) {
        d.year = d.year;
        d.numbers = d.numbers;
    });


    x.domain(d3.extent(data, function(d) { return d.year; }));
    y.domain(d3.extent(data, function(d) { return d.numbers; }));


    svg.append('g')
    .attr('class', 'x_axis')
    .attr('transform', 'translate(0,' + height + ')')
    .call(xAxis)
    // .text('year');

    svg.append('g')
    .attr('class', 'y_axis')
    .call(yAxis)
    .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('dy', '.71em')
    .style('text-anchor', 'end')
    .text('numbers of students')
    ;


    svg.append('path')
    .datum(data)
    .attr('class', 'line')
    .attr('d', line);
 });
