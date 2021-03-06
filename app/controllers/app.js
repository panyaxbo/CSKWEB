"use strict";

/**
 * @ngdoc overview
 * @name cskwebApp
 * @description
 * # cskwebApp
 *
 * Main module of the application.
 */
var app = angular.module('CSKWEB', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize', 
    'ngTouch',
    'ngTable',
    'pascalprecht.translate', 
      'CONFIG', 'vcRecaptcha', 'ngPasswordStrength'
    //  ,'blockUI'
      ]);

app.run(function ($rootScope, $http, $q) {


  $rootScope.$on('UpdateROHeadROLineFromBody', function (event, args) {
      $rootScope.$broadcast('UpdateROHeadROLineFromBodyBroadcast', args);
  });
  $rootScope.$on('UpdateSelectedLocale', function (event, args) {
      $rootScope.$broadcast('UpdateSelectedLocaleBroadcast', args);
  });
  $rootScope.$on('UpdateSelectedCurrency', function (event, args) {
      $rootScope.$broadcast('UpdateSelectedCurrencyBroadcast', args);
  });

  //For update User
  $rootScope.$on('handleUserEmit', function (event, args) {
      $rootScope.$broadcast('handleUserBroadcast', args);
  });
});
/*
.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
});
*/
