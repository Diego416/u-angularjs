(function() {
    'use strict';

    angular
        .module('angularApp')
        .controller('WeatherController', WeatherController);

    /** @ngInject */
    function WeatherController($http, $scope, $mdDialog, API, WeatherService) {
        var vm = this;

        //Talitos API Key
        vm.apiKey = API;
        vm.kind = '0';
        vm.markers = {};
        vm.alert = showAlert;

        function showAlert(titulo, cuerpo) {
            alert = $mdDialog.alert({
                title: titulo,
                textContent: cuerpo,
                ok: 'Close'
            });

            $mdDialog
                .show(alert)
                .finally(function() {
                    alert = undefined;
                });
        }
        //Should we extend or use vm?
        angular.extend($scope, {
            center: {
                lat: 6.227933930268672,
                lng: -75.60791015625,
                zoom: 4
            },
            markers: vm.markers,
            defaults: {
                scrollWheelZoom: false
            },
            events: {
                map: {
                    enable: ['click'],
                    logic: 'emit'
                }
            }
        });



        $scope.$on('leafletDirectiveMap.map.click', mapClick);

        function mapClick(event, args) {
            var lat = args.leafletEvent.latlng.lat;
            var lon = args.leafletEvent.latlng.lng;
            var lat2 = (lat).toFixed(1);
            var lon2 = (lon).toFixed(1);
            var newMarker = {
                lat: lat,
                lng: lon,
                focus: true,
                draggable: false
            };

            vm.markers["newMarker"] = newMarker;


            if (vm.kind == '0') {
                //Remember Services
                var response = WeatherService.getHttpData('http://api.openweathermap.org/data/2.5/weather?APPID=' + vm.apiKey + '&lat=' + lat + '&lon=' + lon);
                response.then(function successCallback(response) {
                    vm.alert("Weather", response.data.weather[0].description);
                }, function errorCallback(response) {
                    vm.alert('Error', "No information about this location");
                })
            } else if (vm.kind == '1') {
                var response = WeatherService.getHttpData('http://api.openweathermap.org/v3/uvi/' + lat2 + ',' + lon2 + '/current.json?appid=' + vm.apiKey);
                response.then(function successCallback(response) {
                    vm.alert("UV", response.data.data);
                }, function errorCallback(response) {
                    vm.alert('Error', "No information about this location");
                })
            } else if (vm.kind == '2') {
                var response = WeatherService.getHttpData('http://api.openweathermap.org/pollution/v1/co/' + lat2 + ',' + lon2 + '/current.json?appid=' + vm.apiKey);
                response.then(function successCallback(response) {
                    vm.alert("Pollution", response.data.data[0].value);
                }, function errorCallback(response) {
                    vm.alert('Error', "No information about this location");
                })
            }
        }

    }

})();