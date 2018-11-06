var app = angular
    .module('MyApp')
    .controller('terminosControllerHttp', function ($scope, $mdDialog, terminosServices) {

        $scope.terminos_http = [];
        $scope.loading_terminos_http = true;
        terminosServices.getTerminosHttp()
            .then(function successCallback(response) {
                $scope.terminos_http = response.data.tecnologia["0"].lista;
                console.log(response.data.tecnologia["0"].lista)
                $scope.loading_terminos_http = false;
            }, function errorCallback(response) {
                $scope.loading_terminos_http = false;
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