(function() {
    'use strict';

    angular
        .module('angularApp')
        .service('WeatherService', WeatherService);

    function WeatherService($http) {
        return {
            getHttpData: function(url) {
                return $http({
                    method: 'GET',
                    url: url
                });
            }
        };
    }
})();