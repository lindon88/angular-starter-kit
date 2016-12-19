/**
 * File name: app.js
 * Author: Lindon Camaj
 * Date: 12/18/2016
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
(function () {
  "use strict";

  angular
    .module("app", ["ui.router", "ngSanitize", "schemaForm", "ngStorage", "kendo.directives", "app.core", "app.components", "app.formEngine"])
    .config(config)
    .run(run);

  config.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider", "$urlMatcherFactoryProvider", "$httpProvider"];
  run.$inject = ["$rootScope", "$http", "$state"];

  function config($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider, $httpProvider) {

    $urlMatcherFactoryProvider.strictMode(false);
    $httpProvider.defaults.withCredentials = true;

    // Rule that converts url to lower case
    $urlRouterProvider.rule(function ($injector, $location) {
      var path = $location.path(),
        lowerCasePath = path.toLowerCase();

      // if path is not lower case then convert to lower case
      if (path != lowerCasePath) {
        $location.replace().path(lowerCasePath);
      }
    });

    $locationProvider.hashPrefix("!");
    $urlRouterProvider.otherwise("/app/home");
  }

  function run($rootScope, $http, $state) {
    $http.defaults.headers.common["Accept"] = "application/json";
    $http.defaults.headers.common['Content-Type'] = 'application/json';

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

      $rootScope.title = "Angular demo ";
      if (toState.title !== "undefined") {
        $rootScope.title += toState.title;
      }

    });

    $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {

    });

    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {

    });

  }

})();
