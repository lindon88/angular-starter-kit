/**
 * File name: contact.controller.js.js
 * Author: Lindon Camaj
 * Date: 7/2/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */

(function(){
  "use strict";

  angular.module("app.components.contact").controller("ContactController", ContactController);

  ContactController.$inject = ["$scope", "$rootScope", "FormService"];

  /**
   * Contact controller
   * @param $scope
   * @constructor
   */
  function ContactController($scope, $rootScope, FormService){
    var ctrlContact = this;
    ctrlContact.formId = "contactForm";

    // get contact form
    FormService.contactForm().then(
      function(data){
        if(typeof data !== "undefined"){
          angular.extend(ctrlContact, data);
        }
      }
    );

    /**
     * On form submit
     * @param form
     */
    ctrlContact.onSubmit = function(form){
      $rootScope.$broadcast('schemaFormValidate');
      if(form.$valid){
        debugger;
      }
    };

  }

})();
