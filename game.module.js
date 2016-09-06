(function() {
  'use strict';
  var app = angular.module("TCC", ['ngRoute', 'ngCookies', 'pascalprecht.translate']);
  app.config(['$translateProvider', function($translateProvider) {

    $translateProvider.translations('en');
    // configures staticFilesLoader
    $translateProvider.useStaticFilesLoader({
      prefix: 'locale-',
      suffix: '.json'
    });

    // load 'en' table on startup
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('escape');
  }]);
  
  app.config(function($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "main.html",
        controller: "MainController",
        controllerAs: "vm"
      })
      .when("/game", {
        templateUrl: "game.html",
        controller: "MainController",
        controllerAs: "vm"
      });
  });
}());