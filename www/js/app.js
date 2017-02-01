// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var inventory = angular.module('inventory', ['inventory.controller','ionic'])

inventory.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

inventory.config(function($stateProvider, $urlRouterProvider){

  $stateProvider.state('login', {
    url : '/login',
    templateUrl : 'templates/login.html',
    controller : 'LoginController'
  })
  .state('register',{
    url : '/register',
    templateUrl: 'templates/register.html',
    controller: 'RegisterController'
  })
  .state('tabs', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  .state('tabs.dashboard',{
    url: '/dashboard',
    views: {
      'dashboard':{
        templateUrl: 'templates/dashboard.html',
        controller: 'DashboardController'
      }
    }
  })
  .state('tabs.profile',{
    url: '/profile',
    views: {
       'profile':{
          templateUrl: 'templates/profile.html',
          controller: 'ProfileController'
       }
    }
  })
  .state('tabs.upload',{
    url: '/upload',
    views: {
      'dashboard' : {
        templateUrl: 'templates/upload.html',
        controller: 'UploadController'
      }
    }
  })
  .state('sales',{
    url: '/sales',
    templateUrl: 'templates/sales.html',
    controller: 'SalesController'
  })
  .state('final_sales', {
    url: '/final',
    templateUrl: 'templates/finalSales.html',
    controller: 'SalesController'
  })

  .state('stock_management',{
    url: '/stock',
    templateUrl: 'templates/stockManagement.html',
    controller: 'StockController'
  })

  $urlRouterProvider.otherwise('/login');
})
