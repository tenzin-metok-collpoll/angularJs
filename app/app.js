// creating a module
var myApp=angular.module('myApp',[]);
// creating a controller
myApp.controller("myCtrl",function($scope){
    $scope.arr=[
        {
            name:"dasdsd",
            age:22,
            fees:2324
        },
        {
            name:"fdgdfs",
            age:23,
            fees:4532
        },
        {
            name:"nbcvcv",
            age:52,
            fees:5435
        },
        {
            name:"adsfad",
            age:25,
            fees:7656
        }
        
    ];
})