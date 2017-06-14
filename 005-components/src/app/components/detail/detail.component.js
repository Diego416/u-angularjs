(function() {
    'use strict';

    angular
        .module('angularApp')
        .component('detail', {
            bindings: {},
            templateUrl: 'app/components/detail/detail.html',
            controller: 'DashboardDetailController',
            controllerAs: 'dasDetailCtrl'
        });
})();