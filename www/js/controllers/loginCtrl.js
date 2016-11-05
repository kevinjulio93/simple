var controllers = angular.module("AppCtrls");

controllers.controller("loginCtrl",function($scope, loginService, $state ){
    
    
    $scope.login = function(user){
        
        
        loginService.Authlogin(user).then(function(sucess){
            
            //console.log(sucess);
            $state.go('app.aseguradora');
        },function(failed){

            //console.log(failed);
            $state.go('app.aseguradora');
            
        })
    }
    
    
    
});