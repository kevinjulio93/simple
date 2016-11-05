var Services = angular.module("AppServices");


Services.factory("aseguradoraService", function($http){
    
    
    return{
        
        getAll: function(){
            
            return $http.get(APIURL+"aseguradora");
        },
        
        getById: function(id){
            
            return $http.get(APIURL+"aseguradora/"+id);
        },
        
        create : function(aseguradora){
            
            return $http.post(APIURL+"aseguradora",aseguradora);
        }
        
    }
    
})