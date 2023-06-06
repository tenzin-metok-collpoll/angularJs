// creating a module
var myApp=angular.module('myApp',[]);
// creating a controller
myApp.controller("myCtrl",function($scope){


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

    }
    $scope.arr=[
        {
            name:"dasdsd",
            age:22,
            fees:2324,
            available:true
        },
        {
            name:"fdgdfs",
            age:23,
            fees:4532,
            available:true
        },
        {
            name:"nbcvcv",
            age:52,
            fees:5435,
            available:false
        },
        {
            name:"adsfad",
            age:25,
            fees:7656,
            available:true
        }
        
    ];
})