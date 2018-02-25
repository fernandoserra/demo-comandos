(function() {
    'use strict';
    angular
    .module('MyApp')
    .service('terminosServices', function($http, $timeout){ 
      var terminosServices = {};
      
      terminosServices.getTerminos = function () {
        return $http.get("https://fernandoserra.github.io/demo-comandos/json/tecnologiasGIT.json");
      };

      terminosServices.getTerminosMaven = function () {
        return $http.get("https://fernandoserra.github.io/demo-comandos/json/tecnologiasMAVEN.json");
      };

      terminosServices.getTerminosLinux = function () {
        return $http.get("https://fernandoserra.github.io/demo-comandos/json/tecnologiasLINUX.json");
      };
  
      return terminosServices;
  
    });
  
  })();