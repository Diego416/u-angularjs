(function() {
    'use strict';

    angular
        .module('angularApp')
        .config(routerDashboard);

    /** @ngInject */
    function routerDashboard($stateProvider) {
        $stateProvider
            .state('dashboard', {
                abstract: true,
                url: '/dashboard',
                templateUrl: 'app/states/dashboard/dashboard.html',
                controller: 'DashboardController',
                controllerAs: 'DashCtrl',
            })
            .state('config', {
                parent: 'dashboard',
                url: '/config',
                views: {
                    "main": {
                        resolve: {
                            promiseObj: function($http) {
                                // $http returns a promise for the url data
                                return $http({ method: 'GET', url: 'app/states/dashboard/config.json' });
                            }
                        },
                        templateUrl: 'app/states/dashboard/config/config.html',
                        controller: 'DashboardConfigController',
                        controllerAs: 'daConfigCtrl'
                    }
                }

            })
            .state('detail', {
                parent: 'dashboard',
                url: '/detail',
                params: {
                    currentPerson: {}
                },
                views: {
                    "main": {
                        templateUrl: 'app/states/dashboard/detail/detail.html',
                        controller: 'DashboardDetailController',
                        controllerAs: 'daDetailCtrl'
                    }
                }

            })
            .state('main', {
                parent: 'dashboard',
                url: '/main',
                views: {
                    "main": {
                        templateUrl: 'app/states/dashboard/main/main.html',
                        controller: 'DashboardMainController',
                        controllerAs: 'daMainCtrl'
                    }
                }

            });
    }

})();