/**
 * File name: contact.module.js
 * Author: Lindon Camaj
 * Date: 12/19/2016
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */

(function(){
  "use strict";

  angular
    .module("app.components.contact", [])
    .config(config);

  config.$inject = ["$stateProvider"];

  /**
   * Contact module config
   * @param $stateProvider
   */
  function config($stateProvider){
    $stateProvider
      .state("contact", {
        url: "/contact",
        parent: "app",
        views: {
          content: {
            controller: "ContactController",
            controllerAs: "ctrlContact",
            templateUrl: "components/contact/views/contact.view.html"
          }
        },
        title: "| Contact"
      });
  }

})();
