(function() {
    'use strict';

    angular
        .module('angularApp')
        .controller('DashboardMainController', DashboardMainController);

    /** @ngInject */
    function DashboardMainController($log, $stateParams, Auth, $state) {
        var vm = this;

        vm.dashboardData = [{
                id: 1,
                name: "Diego",
                detail: "Intern"
            },
            {
                id: 2,
                name: "Camilo",
                detail: "Intern"
            },
            {
                id: 3,
                name: "Ignacio",
                detail: "CTO"
            },
            {
                id: 4,
                name: "Lorena",
                detail: "Human Resources"
            }
        ]

    }
})();