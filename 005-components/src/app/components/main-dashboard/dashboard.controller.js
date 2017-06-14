(function() {
    'use strict';

    angular
        .module('angularApp')
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController($stateParams, $state) {
        var vm = this;
        vm.currentUser = $stateParams.currentUser;
        vm.goToDetail = goToDetailMethod;
        vm.goToConfig = goToConfigMethod;
        vm.goToUsersList = goToUsersListMethod;

        function goToDetailMethod() {
            $state.go('detail');
        }

        function goToConfigMethod() {
            $state.go('detail');
        }

        function goToUsersListMethod() {
            $state.go('dashboard.userList');
        }
    }
})();