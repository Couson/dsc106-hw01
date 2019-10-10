/* 
D3BarChartPlaceHolder
*/
var myData = [223.71, 237.48, 245.07, 257.75, 253.21, 257.61, 283.51, 320.49,
    354.08, 388.22, 410.47, 444.3 , 468.45, 522.65];
var margin = {top: 10, right: 20, bottom: 20, left: 20},
    width = 600 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;
var barWidth = 35;
var barOffset = 5;

var barChart = d3.select('#D3BarChartPlaceHolder')
                .append('svg')
                .attr('width', width)
                .attr('height', height)
                .style('background', '#f4f4f4')
                .selectAll('rect')
                    .data(myData)
                    .enter().append('rect')
                            .style('fill', 'lightgreen')
                            .attr('width', barWidth)
                            .attr('height', function(d) {
                                return d;
                            })
                            .attr('x', function(d, i) {
                                return i * (barWidth + barOffset);
                            })
                            .attr('y', function (d) {
                                return height - d;
                            })
                            ;
