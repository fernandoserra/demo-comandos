var app = angular
    .module('MyApp')
    .controller('terminosController', function ($scope, $mdDialog, terminosServices) {
        $scope.msjp="hola mundo";
        console.log("listando terminos ")
       
        $scope.usuarios = [];
        $scope.loading_usuarios = true;
       
        terminosServices.getTerminos()
            .then(function successCallback(response) {
                $scope.usuarios = response.data.lista;
                console.log(response.data)
                $scope.loading_usuarios = false;
            }, function errorCallback(response) {
                $scope.loading_usuarios = false;
            });

    })