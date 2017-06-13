(function() {
    'use strict';

    angular
        .module('angularApp')
        .controller('HomeController', HomeController);

    /** @ngInject */
    function HomeController(RESERVED_BY, $scope) {
        var vm = this;
        vm.RESERVED_BY = RESERVED_BY;
        vm.icons = ['account_circle', 'home', 'alarm'];
        vm.card = {};
        vm.favorites = [];
        vm.setIcon = setIcon;
        $scope.add = add;

        function setIcon(iconClass) {
            vm.card.icon = iconClass;
        }

        function add(title) {
            //vm.favorites.push(title);
            console.log("Add");
            console.log(vm.favorites);
        }
    }

})();