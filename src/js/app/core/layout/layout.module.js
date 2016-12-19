/**
 * Created by Lindon on 12/19/2016.
 */
(function () {
  "use strict";

  angular
    .module("app.core.layout", [])
    .config(config);

  config.$inject = ["$stateProvider"];

  /**
   * Layout module config method
   * @param $stateProvider
   */
  function config($stateProvider) {
    $stateProvider
      .state("app", {
        abstract: true,
        url: "/app",
        controller: "LayoutController",
        controllerAs: "ctrlLayout",
        templateUrl: "core/layout/views/layout.view.html",
        title: ""
      });
  }
})();
