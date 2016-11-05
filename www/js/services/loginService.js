var Services = angular.module("AppServices");


Services.factory("loginService", function($http){
    
    
    return{
        
        Authlogin: function(data){
            
            return $http.post(APIURL+"login",data);
        }
    }
    
})