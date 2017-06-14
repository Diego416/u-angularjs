(function() {
    'use strict';

    angular
        .module('angularApp')
        .component('userCard', {
            bindings: {
                user: '=',
                onUserSelected: '&',
                onUserLeft: '&'
            },
            templateUrl: 'app/components/user-card/user-card.html'

        });

})();