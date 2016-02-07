"use strict";

/**
 * @ngdoc overview
 * @name cskwebApp
 * @description
 * # cskwebApp
 *
 * Main module of the application.
 */
var app = angular.module('CSKWEB', ['ngAnimate','ngAria','ngCookies','ngMessages',
    'ngResource','ngRoute','ngSanitize', 'ngTouch','pascalprecht.translate', 'ngDialog',
     'ngCookies', 'CONFIG', 'vcRecaptcha', 'ngPasswordStrength']);

app.run(function ($rootScope) {
  $rootScope.$on('UpdateROHeadROLine', function (event, args) {
        $rootScope.$broadcast('UpdateROHeadROLineBroadcast', args);
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
