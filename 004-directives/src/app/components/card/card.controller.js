(function() {
    'use strict';

    angular
        .module('angularApp')
        .controller('CardController', CardController);

    /** @ngInject */
    function CardController($scope) {
        var vm = this;
        vm.add = add;

        function add(title) {
            if (title != undefined)
                vm.favorites.push(title);
        }
    }

})();