(function() {
    'use strict';

    angular
        .module('angularApp')
        .component('home', {
            bindings: {},
            templateUrl: 'app/components/home/home.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl'
        });
})();