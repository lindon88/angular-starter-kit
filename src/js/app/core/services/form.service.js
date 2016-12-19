/**
 * Created by Lindon on 12/19/2016.
 */
(function(){
  "use strict";

  angular.module("app.core.services").factory("FormService", FormService);

  FormService.$inject = ["$http", "$q", "RouterService"];

  /**
   * Form service
   * @param $http
   * @param $q
   * @returns {{loginForm: loginForm}}
   * @constructor
   */
  function FormService($http, $q, RouterService){

    /**
     * Get login form definition
     * @returns {*}
     */
    this.contactForm = function(){
      var deffered = $q.defer();
      $http.get(RouterService.formRoutes.contact).then(
        function(response){
          if(typeof response !== "undefined" && typeof response.data !== "undefined"){
            deffered.resolve(response.data);
          }
          else{
            deffered.reject("No data!!!");
          }
        },
        function(error){
          deffered.reject(error);
        }
      );
      return deffered.promise;
    };


    return this;
  }

})();
