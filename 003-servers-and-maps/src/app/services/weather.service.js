(function() {
    'use strict';

    angular
        .module('angularApp')
        .service('WeatherService', WeatherService);

    function WeatherService($http, API) {
        var vm = this;
        vm.apiKey = API;

        function getWeather(lat, lon) {
            return $http({
                method: 'GET',
                url: 'http://api.openweathermap.org/data/2.5/weather?APPID=' + vm.apiKey + '&lat=' + lat + '&lon=' + lon
            });
        }

        function getUV(lat, lon) {
            return $http({
                method: 'GET',
                url: 'http://api.openweathermap.org/v3/uvi/' + lat + ',' + lon + '/current.json?appid=' + vm.apiKey
            });
        }

        function getPollution(lat, lon) {
            return $http({
                method: 'GET',
                url: 'http://api.openweathermap.org/pollution/v1/co/' + lat + ',' + lon + '/current.json?appid=' + vm.apiKey
            });
        }

        return {
            getWeather: getWeather,
            getUV: getUV,
            getPollution: getPollution
        }
    }
})();