(function() {
    'use strict';

    angular
        .module('angularApp')
        .directive('card', cardDirective);

    /** @ngInject */
    function cardDirective() {
        function link($scope) {

        }

        return {
            scope: {},
            controller: 'CardController',
            controllerAs: 'cardCtrl',
            bindToController: {
                icon: '=',
                title: '=',
                message: '=',
                description: '=',
                background: '=',
                textcolor: '=',
                favorites: '='
            },
            templateUrl: 'app/components/card/card.html',
            link: link
        };
    }

})();