(function() {
    'use strict';

    angular
        .module('angularApp')
        .component('signup', {
            bindings: {},
            templateUrl: 'app/components/auth/signup/signup.html',
            controller: 'AuthSignUpController',
            controllerAs: 'auSignupCtrl'
        });
})();