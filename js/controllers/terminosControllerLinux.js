var app = angular
    .module('MyApp')
    .controller('terminosControllerLinux', function ($scope, $mdDialog, terminosServices) {

        $scope.terminos_linux = [];
        $scope.loading_terminos_linux = true;
        terminosServices.getTerminosLinux()
            .then(function successCallback(response) {
                $scope.terminos_linux = response.data.tecnologia["0"].lista;
                console.log(response.data.tecnologia["0"].lista)
                $scope.loading_terminos = false;
            }, function errorCallback(response) {
                $scope.loading_terminos = false;
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