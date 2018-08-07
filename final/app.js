var myApp = angular.module("myApp", []);

myApp.controller("myController",function($scope){
    console.log("In myController");

    $scope.newUser = {};
    $scope.clickedUser = {};


    $scope.users = [
        {username: "indu", email:"hjvgv"},
        {username: "kAV", email:" xvc"},

    ];


    $scope.saveUser = function(){
        $scope.users.push($scope.newUser);
        $scope.newUser = {};

    };

    $scope.selectUser = function(user){
        console.log(user);
        $scope.clickedUser = user;
    };

    $scope.updateUser = function(){

    };

    $scope.deleteUser = function(){
        $scope.users.splice( $scope.users.indexOf($scope.clickedUser),1);
    };


});