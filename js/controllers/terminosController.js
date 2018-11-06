var app = angular
    .module('MyApp')
    .controller('terminosController', function ($scope, $mdDialog, terminosServices) {

        $scope.terminos = [];
        $scope.loading_terminos = true;
        terminosServices.getTerminos()
            .then(function successCallback(response) {
                $scope.terminos = response.data.tecnologia["0"].lista;
                //console.log(response.data.tecnologia["0"].lista)
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