/**
 * Created by Lindon on 12/19/2016.
 */

(function () {
  "use strict";

  angular.module("app.core.services").factory("RouterService", RouterService);

  /**
   * Router service
   * @constructor
   */
  function RouterService() {

    var endPoint = "";

    /**
     * Resolve url
     * @param url
     * @returns {string}
     */
    var resolve = function (url) {
      if (typeof url === "undefined" || url === null) {
        url = "";
      }
      return endPoint + url;
    };

    /**
     * Get api routes
     * @returns {{checkConnection: string}}
     */
    var apiRoutes = function () {
      return {
        "checkConnection":      "/connection/status"
      };
    };

    /**
     * Get form routes
     * @returns {{contact: string}}
     */
    var formRoutes = function(){
      return {
        "contact": "src/forms/contact.json"
      };
    };

    return {
      apiRoutes: apiRoutes(),
      formRoutes: formRoutes(),
      resolve: resolve
    };
  }

})();
