(function() {
    'use strict';

    angular
        .module('angularEx1')
        .controller('HomeController', HomeController);

    /** @ngInject */
    function HomeController($log, SITE_NAME, $location) {
        var vm = this;
        vm.mainTitle = SITE_NAME;
        vm.signInToday = signInToday;

        function signInToday() {
            $location.path('signin');
        }

    }
})();