angular
  .module('MyApp', ['ui.router','ngMaterial', 'ngMessages','ngAnimate'])
  .config(function($stateProvider, $urlRouterProvider,$mdThemingProvider){

    $mdThemingProvider.definePalette('amazingPaletteName', {
      '50': 'ffebee',
      '100': 'ffcdd2',
      '200': 'ef9a9a',
      '300': 'e57373',
      '400': 'ef5350',
      '500': '1c1464', // azul base
      '600': '2BA1CB', // over
      '700': 'd32f2f',
      '800': 'c62828',
      '900': 'b71c1c',
      'A100': 'ff8a80',
      'A200': 'ff5252',
      'A400': 'ff1744',
      'A700': 'd50000',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': ['50', '100', 
       '200', '300', '400', 'A100'],
      'contrastLightColors': undefined
    });
    
    $mdThemingProvider.theme('ind')
      .primaryPalette('indigo',{'hue-1': '100'})
      .accentPalette('pink')
      .warnPalette('red')
      
    $mdThemingProvider.theme('purpura')
      .primaryPalette('purple')

    $mdThemingProvider.theme('oscuro')
      .primaryPalette('blue-grey')
      .accentPalette('orange')
      .warnPalette('red')

    $mdThemingProvider.theme('verde')
      .primaryPalette('green')
      .accentPalette('green')
      .warnPalette('red')
    
    $mdThemingProvider.theme('blanco')
      .primaryPalette('amazingPaletteName')
      .accentPalette('blue')
    
    $mdThemingProvider.setDefaultTheme('oscuro'); 
    $mdThemingProvider.alwaysWatchTheme(true);

    $urlRouterProvider.otherwise('/git')
    $stateProvider

      .state('git',{ 
        url:'/git', 
        templateUrl : 'templates/git.html',
        controller  : 'terminosController'
      })

      .state('maven',{ 
        url:'/maven', 
        templateUrl : 'templates/maven.html',
        controller  : 'terminosControllerMaven'
      })

      .state('linux',{ 
        url:'/linux', 
        templateUrl : 'templates/linux.html',
        controller  : 'terminosControllerLinux'
      })
       
  })
  .run(function($timeout,$transitions,$state,$http,$rootScope)
  {     
    $transitions.onStart({}, function($transitions){
      $rootScope.stateIsLoading = true; 
    })
    $transitions.onSuccess({}, function($transitions){
      $timeout(function() { $rootScope.stateIsLoading = false; }, 1500);
    }) 
  })
  
  
  .controller('AppCtrl', function ($scope, $timeout, $mdSidenav) {
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }
  })

  .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
        });
    };
  })
  .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('right').close()
        .then(function () {
        });
    };    
  })