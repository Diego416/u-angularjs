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
        vm.add = add;

        function setIcon(iconClass) {
            vm.card.icon = iconClass;
        }

        function add(title) {
            console.log(title);
            console.log("antes: "); // + vm.favorites);
            //vm.favorites.push("Hola");
            //console.log(vm.card.title);
            if (title != undefined) {
                vm.favorites.push(title);
            }
            console.log("luego: " + vm.favorites);
        }
    }

})();