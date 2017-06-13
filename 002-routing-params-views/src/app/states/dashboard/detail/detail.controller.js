(function() {
    'use strict';

    angular
        .module('angularApp')
        .controller('DashboardDetailController', DashboardDetailController);

    /** @ngInject */
    function DashboardDetailController($log, $stateParams, Auth, $state) {
        var vm = this;
        vm.currentPerson = $stateParams.currentPerson;

    }
})();