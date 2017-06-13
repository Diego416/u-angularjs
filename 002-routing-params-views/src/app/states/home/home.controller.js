(function() {
    'use strict';

    angular
        .module('angularApp')
        .controller('HomeController', HomeController);

    /** @ngInject */
    function HomeController($log, SITE_NAME, $state, $stateParams, Auth) {
        var vm = this;
        vm.mainTitle = SITE_NAME;
        vm.signUpToday = signUpToday;
        vm.loginData = Auth.currentUser();

        function signUpToday() {
            if (vm.loginData == null) {
                $state.go('signin');
            } else {
                $state.go('main');
            }
        }

    }
})();