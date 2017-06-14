(function() {
    'use strict';

    angular
        .module('angularApp')
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController($log, $stateParams, Auth, $state) {
        var vm = this;
        //vm.loginData = Auth.currentUser();
        vm.detail = detail;
        vm.config = config;
        //vm.logout = logout;
        //vm.home = home;

        function detail(person) {
            $state.go('detail', { currentPerson: person });
        }

        function config() {
            $state.go('config');
        }

        /*function home() {
            $state.go('home');
        }

        function logout() {
            if (Auth.logOut(vm.loginData)) {
                $state.go('home');
            }
        }*/
    }
})();