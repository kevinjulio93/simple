var controllers = angular.module("AppCtrls");

controllers.controller("aseguradoraCtrl",function($scope, aseguradoraService){
    
    
    //console.log("aseguradora Controller");
    
    $scope.aseguradoras = function(){
        
        aseguradoraService.getAll().then(function(sucess){
                    
            $scope.asegura = sucess.data;
            console.log($scope.asegura);
            
        },function(failed){
          
            console.log(failed);
            
        })
        
    }
    
    $scope.aseguradoras();
    
})
    
.controller("aseguradoraDetalleCtrl",function($scope, aseguradoraService, $stateParams){
    
    aseguradoraService.getById($stateParams.aseguradoraId).then(function(sucess){
        
                $scope.aseguradora = sucess.data;
                console.log($scope.aseguradora);
        
    },function(failed){
        
        console.log(failed);
        
    })
    
    console.log($stateParams.aseguradoraId);
    
    
})

.controller("aseguradoraCrearCtrl",function($scope, aseguradoraService ){
    
    aseguradoraService.create(aseguradora).then(function(sucess){
        
        console.log(sucess);
        
    },function(failed){
        
        
        console.log(failed);
    })
    
})

