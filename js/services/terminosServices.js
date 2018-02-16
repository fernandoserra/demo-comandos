(function() {
    'use strict';
    angular
    .module('MyApp')
    .service('terminosServices', function($http, $timeout){ 
      var terminosServices = {};
      
      terminosServices.getTerminos = function () {
        return $http.get("https://fernandoserra.github.io/demo-terminos/json/tecnologiasGIT.json");
      };
  
      return terminosServices;
  
    });
  
  })();