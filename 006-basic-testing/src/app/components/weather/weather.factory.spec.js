(function() {
    'use strict';

    describe('service weatherFactory', function() {
        var weatherFactory, $httpBackend, WEATHER_API;

        beforeEach(module('angularApp'));
        beforeEach(module('ngResource'));
        beforeEach(inject(function($injector) {
            weatherFactory = $injector.get('WeatherFactory');
            WEATHER_API = $injector.get('WEATHER_API');
            $httpBackend = $injector.get('$httpBackend');
            $httpBackend.whenGET('http://api.openweathermap.org/data/2.5/weather?APPID=' + WEATHER_API + '&lat=(.*)&lon=(.*)').respond();
            $httpBackend.whenGET('http://api.openweathermap.org/v3/uvi/:latlng/current.json?appid=' + WEATHER_API).respond();
        }));

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('should be registered', function() {
            expect(weatherFactory).not.toEqual(null);
        });

        describe('getWeather function', function() {
            it('should exist', function() {
                expect(weatherFactory.getWeather).not.toEqual(null);
            });

            it('should return weather', function() {
                var lat = 41.83682786072714;
                var lon = -114.169921875;
                var expectedResponse = {
                    name: 'Delano (historical)',
                    weather: [{ description: 'Sunny' }],
                    main: { temp: 33 }
                };

                $httpBackend.expectGET('http://api.openweathermap.org/data/2.5/weather?APPID=' + WEATHER_API + '&lat=' + lat + '&lon=' + lon).respond(expectedResponse);

                var promise = weatherFactory.getWeather(lat, lon);

                promise.query().$promise.then(function(response) {
                    expect(response.name).toEqual(expectedResponse.name);
                    expect(response.weather[0].description).toEqual(expectedResponse.weather[0].description);
                    expect(response.main.temp).toEqual(expectedResponse.main.temp);
                });

                $httpBackend.flush();
            });
        });

        describe('getUV function', function() {
            it('should exist', function() {
                expect(weatherFactory.getUV).not.toEqual(null);
            });

            it('should return uv', function() {
                var lat = 41.83682786072714;
                var lon = -114.169921875;
                var expectedResponse = {
                    data: 110
                };

                $httpBackend.expectGET('http://api.openweathermap.org/v3/uvi/' + [lat, lon] + '/current.json?appid=' + WEATHER_API).respond(expectedResponse);

                var promise = weatherFactory.getUV();

                promise.query({ latlng: [lat, lon] }).$promise.then(function(response) {
                    expect(response.data).toEqual(expectedResponse.data);
                });

                $httpBackend.flush();
            });
        });
    });
})();