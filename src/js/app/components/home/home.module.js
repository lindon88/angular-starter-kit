/**
 * File name: main.module.js.js
 * Author: Lindon Camaj
 * Date: 7/2/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */

(function(){
  "use strict";

  angular.module("app.components.home", [])
    .config(config);

  config.$inject = ["$stateProvider"];

  /**
   * Home module config
   * @param $stateProvider
   */
  function config($stateProvider){
    $stateProvider
      .state("home", {
        url: "/home",
        parent: "app",
        views: {
          content: {
            controller: "HomeController",
            controllerAs: "ctrlHome",
            templateUrl: "components/home/views/home.view.html"
          }
        },
        title: "| Home"
      });
  }

})();
