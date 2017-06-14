(function() {
    'use strict';

    angular
        .module('angularApp')
        .component('config', {
            bindings: {},
            templateUrl: 'app/components/dashboard/config.html',
            controller: 'DashboardConfigController',
            controllerAs: 'dasConfigCtrl'
        });
})();