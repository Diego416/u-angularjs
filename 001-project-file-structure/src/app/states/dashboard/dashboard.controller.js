(function() {
    'use strict';

    angular
        .module('angularEx1')
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController($log, SITE_NAME, $location) {
        var vm = this;
        vm.mainTitle = SITE_NAME;
        console.log("Holi");

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