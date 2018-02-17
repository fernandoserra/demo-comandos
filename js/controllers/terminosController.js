var app = angular
    .module('MyApp')
    .controller('terminosController', function ($scope, $mdDialog, terminosServices) {
        console.log("listando terminos ")
       
        $scope.usuarios = [];
        $scope.loading_usuarios = true;
       
        terminosServices.getTerminos()
            .then(function successCallback(response) {
                $scope.usuarios = response.data.tecnologia["0"].lista;
                console.log(response.data.tecnologia["0"].lista)
                $scope.loading_usuarios = false;
            }, function errorCallback(response) {
                $scope.loading_usuarios = false;
            });

    })