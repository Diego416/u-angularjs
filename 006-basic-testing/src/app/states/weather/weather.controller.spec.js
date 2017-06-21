(function() {
    'use strict';

    describe('controller WeatherController', function() {
        var suite = {};

        beforeEach(module('angularApp'));
        beforeEach(module('ngResource'));
        beforeEach(inject(function($injector) {
            suite.$controller = $injector.get('$controller');
            suite.$rootScope = $injector.get('$rootScope');
            suite.scope = suite.$rootScope.$new();
            suite.$mdDialog = $injector.get('$mdDialog');
            suite.$log = $injector.get('$log');
            suite.$q = $injector.get('$q');

            suite.weatherFactoryMock = {
                getWeather: function(lat, lon) {
                    return {
                        query: function() {
                            suite.queryDeferred = suite.$q.defer();
                            return { $promise: suite.queryDeferred.promise };
                        }
                    };
                },
                getUV: function(lat, lon) {
                    return {
                        query: function() {
                            suite.queryDeferred = suite.$q.defer();
                            return { $promise: suite.queryDeferred.promise };
                        }
                    };
                },
            };

            suite.vm = suite.$controller('WeatherController', {
                $scope: suite.scope,
                $mdDialog: suite.$mdDialog,
                $log: suite.$log,
                WeatherFactory: suite.weatherFactoryMock,
            });
        }));

        afterEach(function() {
            suite = {};
        });

        afterAll(function() {
            suite = null;
        });

        it('should be registered', function() {
            expect(suite.vm).not.toEqual(null);
        });

        describe('kind var', function() {
            it('should exist', function() {
                expect(suite.vm.kind).not.toEqual(null);
            });

            it('should be 0', function() {
                expect(suite.vm.kind).toEqual('0');
            });
        });

        it('open modal should exist', function() {
            expect(suite.vm.openModal).not.toEqual(null);
        });

        describe('triggerClick', function() {
            it('should exist', function() {
                expect(suite.vm.triggerClick).not.toEqual(null);
            });

            describe('after run triggerClick function', function() {
                beforeEach(function() {
                    suite.args = {
                        leafletEvent: {
                            latlng: {
                                lat: 41.83682786072714,
                                lng: -114.169921875
                            }
                        }
                    };
                });

                describe('with kind var = 0 and successfull', function() {
                    it('should be successfull', function() {
                        suite.vm.kind = '0';

                        spyOn(suite.weatherFactoryMock, 'getWeather').and.callThrough();
                        suite.vm.triggerClick(null, suite.args);
                        suite.queryDeferred.resolve({
                            name: 'Delano (historical)',
                            weather: [{ description: 'Sunny' }],
                            main: { temp: 33 },
                            success: true
                        });
                        suite.scope.$apply();

                        //Expects
                        expect(suite.weatherFactoryMock.getWeather).toHaveBeenCalled();
                        expect(suite.vm.response.success).toEqual(true);
                    });
                });

                describe('with kind var = 0 and null', function() {
                    it('should be null', function() {
                        suite.vm.kind = '0';

                        spyOn(suite.weatherFactoryMock, 'getWeather').and.callThrough();
                        suite.vm.triggerClick(null, suite.args);
                        suite.queryDeferred.resolve({});
                        suite.scope.$apply();

                        //Expects
                        expect(suite.weatherFactoryMock.getWeather).toHaveBeenCalled();
                        expect(suite.vm.response.success).toBe(false);
                    });
                });

                describe('with kind var = 0 and error', function() {
                    it('should be error', function() {
                        suite.vm.kind = '0';

                        spyOn(suite.weatherFactoryMock, 'getWeather').and.callThrough();
                        spyOn(suite.$log, 'debug').and.callThrough();
                        suite.vm.triggerClick(null, suite.args);
                        suite.queryDeferred.reject("Error");
                        suite.scope.$apply();

                        //Expects
                        expect(suite.weatherFactoryMock.getWeather).toHaveBeenCalled();
                        expect(suite.$log.debug).toHaveBeenCalled();
                    });
                });

                describe('with kind var = 1 and successfull', function() {
                    it('should be successfull', function() {
                        suite.vm.kind = '1';

                        spyOn(suite.weatherFactoryMock, 'getUV').and.callThrough();
                        suite.vm.triggerClick(null, suite.args);
                        suite.queryDeferred.resolve({
                            data: 110,
                            success: true
                        });
                        suite.scope.$apply();

                        //Expects
                        expect(suite.weatherFactoryMock.getUV).toHaveBeenCalled();
                        expect(suite.vm.response.success).toEqual(true);
                    });
                });

                describe('with kind var = 1 and null', function() {
                    it('should be null', function() {
                        suite.vm.kind = '1';

                        spyOn(suite.weatherFactoryMock, 'getUV').and.callThrough();
                        suite.vm.triggerClick(null, suite.args);
                        suite.queryDeferred.resolve({});
                        suite.scope.$apply();

                        //Expects
                        expect(suite.weatherFactoryMock.getUV).toHaveBeenCalled();
                        expect(suite.vm.response.success).toBe(false);
                    });
                });

                describe('with kind var = 1 and error', function() {
                    it('should be error', function() {
                        suite.vm.kind = '1';

                        spyOn(suite.weatherFactoryMock, 'getUV').and.callThrough();
                        spyOn(suite.$log, 'debug').and.callThrough();
                        suite.vm.triggerClick(null, suite.args);
                        suite.queryDeferred.reject("Error");
                        suite.scope.$apply();

                        //Expects
                        expect(suite.weatherFactoryMock.getUV).toHaveBeenCalled();
                        expect(suite.$log.debug).toHaveBeenCalled();
                    });
                });
            });
        });
    });
})();