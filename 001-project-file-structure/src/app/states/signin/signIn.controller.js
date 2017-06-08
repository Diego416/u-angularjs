(function() {
    'use strict';

    angular
        .module('angularEx1')
        .controller('SignInController', SignInController);

    /** @ngInject */
    function SignInController($log, SITE_NAME, $location) {
        var vm = this;
        vm.mainTitle = SITE_NAME;
        vm.signIn = signIn;
        vm.email = "";
        vm.password = "";

        function signIn() {
            $location.path('dashboard');
        }

    }
})();