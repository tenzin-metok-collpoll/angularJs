// creating a module
var myApp=angular.module('myApp',[]);
// creating a controller
myApp.controller("myCtrl",function($scope){
    $scope.message="welcome here";
    $scope.handleClick=function(){
        alert("you clicked me!!");
    }
    $scope.arr=['aaa','bbb','ccc','ddd'];
})