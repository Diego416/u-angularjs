(function() {
    'use strict';

    angular
        .module('angularApp')
        .config(routerAuth);

    /** @ngInject */
    function routerAuth($stateProvider) {
        $stateProvider
            .state('auth', {
                abstract: true,
                url: '/auth',
                views: {
                    "site@": {
                        template: '<section class="general-section" ui-view></section>'
                    }
                },
                onEnter: function(Auth, $state) {
                    if (Auth.currentUser()) {
                        $state.go('mainDashboard');
                    }
                }
            })
            .state('login', {
                parent: 'auth',
                url: '/login',
                params: {
                    currentUser: {}
                },
                template: '<login></login>'
            })
            .state('signup', {
                parent: 'auth',
                url: '/signup',
                template: '<signup></signup>'
            });
    }

})();