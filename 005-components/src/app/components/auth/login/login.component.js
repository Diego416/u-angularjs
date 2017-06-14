(function() {
    'use strict';

    angular
        .module('angularApp')
        .component('login', {
            bindings: {},
            templateUrl: 'app/components/auth/login/login.html',
            controller: 'AuthLoginController',
            controllerAs: 'auLoginCtrl'

        });
})();