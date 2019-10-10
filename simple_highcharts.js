/*
lineCharts
 */
var series = 
[
    {
      name: 'fulltime_men_applied',
      data: [45636, 41583, 39779, 37009, 34618, 31992, 28758,
         25097, 22332, 21725, 21590, 20566, 19838, 18147]
    },
    {
      name: 'fulltime_women_applied',
      data:[52265, 46845, 44430, 41047, 38822, 35408, 32049,
         28351, 25761, 25321, 25775, 24507, 23748, 22371]
    },
    {
      name: 'fulltime_men_admitted',
      data: [13781, 13981, 14103, 12748, 11758, 11866, 10917,
         8707, 8365, 7816, 8517, 8419, 9210, 7580]
    },
    {
      name: 'fulltime_women_admitted',
      data: [15821, 16231, 16170, 13761, 12837, 12966, 12046,
        10269, 9991, 9863, 11200, 10759, 12135, 10311]
    },
    {
      name: 'fulltime_men_enrolled',
      data: [3220, 2725, 2669, 2711, 2538, 2616, 2328, 1583, 
        1858, 1695, 1893, 1838, 2031, 1607]
    },
    {
      name: 'full_time_women_enrolled',
      data: [3484, 2974, 3077, 2581, 2383, 2612, 2245, 1861, 
        2089, 2054, 2399, 2303, 2558, 2113]
    },
  ];


// console.log('Hi yo');
// import { rawData } from "./data";

var title = {
    text: 'Gender Differences in UCSD Admission'
};

// var subtitle = {
//     text: 'sth'
// };
var xAxis = {
    title: {
        text: 'year'
    },
    categories: [ 
    2005, 2006, 2007, 2008, 2009, 2010, 2011,
    2012, 2013,2014, 2015, 2016, 2017, 2018
    ]
};

var yAxis = {
    title : {
        text : 'numbers of students'
    },
    plotLines: [{
        values: 0,
        width: 10,
        color: '#808080'
    }]
};

// var tooltip = {
//     valueSuffix: '/xBOC'
// };

var legend = {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 0
};


var json = {};
json.title = title;
json.xAxis = xAxis;
json.yAxis = yAxis;
// json.tooltip = tooltip;
json.legend = legend;
json.series = series;

var someVar = document.getElementById('chartPlaceHolder');
Highcharts.chart(someVar, json);


/*
barCharts
 */
document.addEventListener('DOMContentLoaded', function () {
    var myChart = Highcharts.chart('barChartPlaceHolder', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Gender Differences in UCSD Admission'
        },
        xAxis: {
            title: {
                text: 'year'
            },
            categories: [ 
                2005, 2006, 2007, 2008, 2009, 2010, 2011,
                2012, 2013,2014, 2015, 2016, 2017, 2018
                ]
        },
        yAxis: {
            title: {
                text: 'numbers of students'
            }
        },
        series: series
    });
});


/*
pieChart
*/
document.addEventListener('DOMContentLoaded', function () {
    var myChart = Highcharts.chart('pieChartPlaceHolder', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Gender Differences in UCSD Admission, 2018'
        },
        series:  [{
            name: 'UCSD Admission',
            colorByPoint: true,
            data: [{
                name: 'fulltime_men_applied in 2018',
                y: 45636,
            }, {
                name: 'fulltime_women_applied in 2018',
                y: 52265
            }]
        }]
    });
});

