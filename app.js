(function () {
    'use strict';

    const app = angular.module("pocApp", ["ngRoute"]);

    // Routing
    // app.config(function($routeProvider) {
    //     $routeProvider
    //     .when("/", {
    //       template : "Series view here"
    //     })
    //     .when("/categories", {
    //       template : "Categorize veiw here"
    //     })
    //     .otherwise({
    //         template: "OOPS! Not Found."
    //     })
    //   });

    // Directive Declaration
    app.directive('hcChart', function () {
        return {
            restrict: 'E',
            template: '<div></div>',
            scope: {
                options: '=',
                typeofchart: '=',
                title: '@'
            },
            link: function (scope, element) {
                console.log(scope.options);
                console.log(scope.typeofchart);
                Highcharts.chart(element[0],{
                    chart:{type:scope.typeofchart},
                    title:{
                    text: scope.title
                    },
                    ...scope.options})
            }
        }
    })


    // Controller Declaration
    app.controller('pocController', function ($scope) {
        $scope.lineChart="line",
        $scope.columnChart= "column"
        $scope.barChart = "bar"
        $scope.areaChart="area"
        $scope.chartOptions = {
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },

            series: [{
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
            }]
        }
    })

})()