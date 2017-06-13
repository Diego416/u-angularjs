(function() {
    'use strict';

    angular
        .module('angularApp')
        .controller('WeatherController', WeatherController);

    /** @ngInject */
    function WeatherController($http, $scope, $mdDialog) {
        var vm = this;

        //Talitos API Key
        vm.apiKey = '534eccb946ce639dbb41f82b8be15dcc';
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

        $scope.$on('leafletDirectiveMap.map.click', function(event, args) {
            var lat = args.leafletEvent.latlng.lat;
            var lon = args.leafletEvent.latlng.lng;
            var lat2 = (lat).toFixed(1);
            var lon2 = (lon).toFixed(1);
            //console.log("Lat: " + lat);
            //console.log("Lon: " + lon);
            var newMarker = {
                lat: lat,
                lng: lon,
                focus: true,
                draggable: false
            };

            vm.markers["newMarker"] = newMarker;


            if (vm.kind == '0') {
                //Remember Services
                $http({
                    method: 'GET',
                    url: 'http://api.openweathermap.org/data/2.5/weather?APPID=' + vm.apiKey + '&lat=' + lat + '&lon=' + lon
                }).then(function successCallback(response) {
                    vm.alert("Weather", response.data.weather[0].description) //alert(response.data.name); //Not a good practice
                }, function errorCallback(response) {
                    vm.alert('Error', "No information about this location");
                });
            } else if (vm.kind == '1') {
                $http({
                    method: 'GET',
                    url: 'http://api.openweathermap.org/v3/uvi/' + lat2 + ',' + lon2 + '/current.json?appid=' + vm.apiKey
                }).then(function successCallback(response) {
                    vm.alert("UV", response.data.data) //alert(response.data.name); //Not a good practice
                }, function errorCallback(response) {
                    vm.alert('Error', "No information about this location");
                });
                //http://api.openweathermap.org/v3/uvi/{lat},{lon}./current.json?appid={your-api-key}
            } else if (vm.kind == '2') {
                $http({
                    method: 'GET',
                    url: 'http://api.openweathermap.org/pollution/v1/co/' + lat2 + ',' + lon2 + '/current.json?appid=' + vm.apiKey
                }).then(function successCallback(response) {
                    vm.alert("Pollution", response.data.data[0].value) //alert(response.data.name); //Not a good practice
                }, function errorCallback(response) {
                    vm.alert('Error', "No information about this location");
                });
                //http://api.openweathermap.org/pollution/v1/co/{location}/current.json?appid={api_key}
            }
        });

    }

})();