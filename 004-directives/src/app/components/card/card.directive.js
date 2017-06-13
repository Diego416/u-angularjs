(function() {
    'use strict';

    angular
        .module('angularApp')
        .directive('card', cardDirective);

    /** @ngInject */
    function cardDirective() {
        function link($scope) {}

        return {
            scope: {
                icon: '=',
                title: '=',
                message: '=',
                description: '=',
                background: '=',
                textcolor: '=',
                addfavorites: '&addfavorites'
            },
            controller: 'CardController',
            controllerAs: 'cardCtrl',
            templateUrl: 'app/components/card/card.html',
            link: link
        };
    }

})();