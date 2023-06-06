// creating a module
var myApp=angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .when('/directory',{
            templateUrl: 'views/directory.html',
            controller: 'myCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);

// creating a controller
myApp.controller("myCtrl",['$scope', '$http', function($scope,$http){


    $scope.removeArr=function(i){
        var removedArr=$scope.arr.indexOf(i);
        $scope.arr.splice(removedArr,1);
    }
    $scope.addArr=function(){
        console.log("===========");
        $scope.arr.push({
            name:$scope.newArr.name,
            age: parseInt($scope.newArr.age),
            fees: parseInt($scope.newArr.fees),
            available: true
        });
    $scope.newArr.name="";
    $scope.newArr.age="";
    $scope.newArr.fees="";

    };
    $http.get('data/arr.json').then(function(data){
        console.log('data: ', data);
        $scope.arr = data.data;
    });
}]);
