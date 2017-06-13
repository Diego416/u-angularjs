(function() {
    'use strict';

    angular
        .module('angularEx1')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/states/home/home.html',
                controller: 'HomeController',
                controllerAs: 'homeCtrl'
            })
            .state('signin', {
                url: '/signin',
                templateUrl: 'app/states/signin/signin.html',
                controller: 'SignInController',
                controllerAs: 'signInCtrl'
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'app/states/dashboard/dashboard.html',
                controller: 'DashboardController',
                controllerAs: 'DashCtrl'
            });

        $urlRouterProvider.otherwise('/');
    }

})();