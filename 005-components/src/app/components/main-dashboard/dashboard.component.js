(function() {
    'use strict';

    angular
        .module('angularApp')
        .component('dashboard', {
            bindings: {},
            templateUrl: 'app/components/main-dashboard/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dasCtrl'
        });
})();