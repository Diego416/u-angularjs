(function() {
    'use strict';

    angular
        .module('angularApp')
        .controller('DashboardConfigController', DashboardConfigController);

    /** @ngInject */
    function DashboardConfigController($log, $stateParams, Auth, $state, promiseObj) {
        var vm = this;

        vm.config = promiseObj.data;
        //console.log(vm.config);
    }
})();