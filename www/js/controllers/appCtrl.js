var controllers = angular.module("AppCtrls");

controllers.controller("appCtrl",function($scope, $ionicSideMenuDelegate){
    
    $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
    console.log("app ctrl");
    
    
    
})