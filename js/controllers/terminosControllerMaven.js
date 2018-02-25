var app = angular
    .module('MyApp')
    .controller('terminosControllerMaven', function ($scope, $mdDialog, terminosServices) {

        $scope.terminos_maven = [];
        $scope.loading_terminos_maven = true;
        terminosServices.getTerminosMaven()
            .then(function successCallback(response) {
                $scope.terminos_maven = response.data.tecnologia["0"].lista;
                console.log(response.data.tecnologia["0"].lista)
                $scope.loading_terminos_maven = false;
            }, function errorCallback(response) {
                $scope.loading_terminos_maven = false;
            });

        $scope.showPrerenderedDialog = function (termino) {
            $scope.terminoDet = termino
            $mdDialog.show({
                contentElement: '#myDialog',
                parent: angular.element(document.body),
                clickOutsideToClose: true
            });
        };

        $scope.closeDialog=function(){ $mdDialog.hide(); }

    })