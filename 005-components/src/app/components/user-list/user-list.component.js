(function() {
    'use strict';

    angular
        .module('angularApp')
        .component('userList', {
            bindings: {
                resolve: '='
            },
            templateUrl: 'app/components/user-list/user-list.html',
            controller: 'UserListController',
            controllerAs: 'userListCtrl'
        });
})();