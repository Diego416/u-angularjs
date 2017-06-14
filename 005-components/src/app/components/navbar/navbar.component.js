(function() {
    'use strict';

    angular
        .module('angularApp')
        .component('navbar', {
            bindings: {},
            templateUrl: 'app/components/navbar/navbar.html',
            controller: 'NavbarController',
            controllerAs: 'navCtrl'
        });
})();