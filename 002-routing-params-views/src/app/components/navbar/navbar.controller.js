(function() {
    'use strict';

    angular
        .module('angularApp')
        .controller('NavbarController', NavbarController);

    /** @ngInject */
    function NavbarController($log, $stateParams, Auth, $state) {
        var vm = this;
        vm.loginData = Auth.currentUser();
        vm.logout = logout;
        vm.home = home;

        function home() {
            $state.go('home');
        }

        function logout() {
            if (Auth.logOut(vm.loginData)) {
                $state.go('home');
            }
        }
    }
})();