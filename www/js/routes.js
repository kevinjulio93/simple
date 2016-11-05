var routes=angular.module("AppRoutes");

routes.config(function($stateProvider, $urlRouterProvider){
    
    $stateProvider.state('login',{
        
        url:'/login',
        templateUrl:'template/login.html',
        controller:'loginCtrl'
    })
    
    
        .state('app',{
        
        url:'/app',
        templateUrl:'template/app.html',
        controller:'appCtrl'
    })
    
        .state('app.aseguradora',{
        
        url:'/aseguradora',
        templateUrl:'template/aseguradora/base.html',
        controller:'aseguradoraCtrl'
    })
    
        .state('app.detalle',{
        
        url:'/aseguradora/detalle/:aseguradoraId',
        templateUrl:'template/aseguradora/detalle.html',
        controller:'aseguradoraDetalleCtrl'
    })
    
        .state('app.crear',{
        
        url:'/aseguradora/crear',
        templateUrl:'template/aseguradora/crear.html',
        controller:'aseguradoraCrearCtrl'
    })
    
        .state('app.editar',{
        
        url:'/aseguradora/editar/:aseguradoraId',
        templateUrl:'template/aseguradora/crear.html',
        controller:'aseguradoraEditarCtrl'
    })
    
    
    
    
    $urlRouterProvider.otherwise('/login')
    
    
});