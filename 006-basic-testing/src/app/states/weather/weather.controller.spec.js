(function() {
    'use strict';

    describe('controller WeatherController', function() {
        var WeatherController, $scope, controller;

        beforeEach(module('angularApp'));
        beforeEach(module('ngResource'));
        beforeEach(inject(function(_$controller_) {
            WeatherController = _$controller_;
        }));
        beforeEach(function() {
            $scope = {};
            controller = WeatherController('WeatherController', { $scope: $scope });
        });

        it('should be registered', function() {
            expect(WeatherController).not.toEqual(null);
        });

        describe('kind var', function() {
            it('should exist', function() {
                expect($scope.obj.kind).not.toEqual(null);
            });

            it('should be 0', function() {
                expect($scope.obj.kind).toEqual('0');
            });
        });


        describe('object options', function() {
            it('should exist', function() {
                expect($scope.obj.options).not.toEqual(null);
            });

            describe('.center', function() {
                it('should exist', function() {
                    expect($scope.obj.options.center).not.toEqual(null);
                });

                it('.lat should exist', function() {
                    expect($scope.obj.options.center.lat).not.toEqual(null);
                });

                it('.lat should be 38.8225909761771', function() {
                    expect($scope.obj.options.center.lat).toEqual(38.8225909761771);
                });

                it('.lng should exist', function() {
                    expect($scope.obj.options.center.lng).not.toEqual(null);
                });

                it('.lng should be -96.5478515625', function() {
                    expect($scope.obj.options.center.lng).toEqual(-96.5478515625);
                });

                it('.zoom should exist', function() {
                    expect($scope.obj.options.center.zoom).not.toEqual(null);
                });

                it('.zoom should be 4', function() {
                    expect($scope.obj.options.center.zoom).toEqual(4);
                });
            });

            describe('.defaults', function() {
                it('should exist', function() {
                    expect($scope.obj.options.defaults).not.toEqual(null);
                });

                it('.scrollWheelZoom should exist', function() {
                    expect($scope.obj.options.defaults.scrollWheelZoom).not.toEqual(null);
                });

                it('.scrollWheelZoom should be false', function() {
                    expect($scope.obj.options.defaults.scrollWheelZoom).toEqual(false);
                });
            });

            describe('.events', function() {
                it('should exist', function() {
                    expect($scope.obj.options.events).not.toEqual(null);
                });

                describe('.map', function() {
                    it('should exist', function() {
                        expect($scope.obj.options.events.map).not.toEqual(null);
                    });

                    it('.enable should exist', function() {
                        expect($scope.obj.options.events.map.enable).not.toEqual(null);
                    });

                    it('.logic should exist', function() {
                        expect($scope.obj.options.events.map.logic).not.toEqual(null);
                    });
                });
            });
        });

        it('open modal should exist', function() {
            expect($scope.obj.openModal).not.toEqual(null);
        });

        describe('triggerClick', function() {
            it('should exist', function() {
                expect($scope.obj.triggerClick).not.toEqual(null);
            });

            describe('after run triggerClick function', function() {
                beforeEach(function() {
                    $scope = {};
                    controller = WeatherController('WeatherController', { $scope: $scope });

                    var args = {
                        leafletEvent: {
                            latlng: {
                                lat: 41.83682786072714,
                                lng: -114.169921875
                            }
                        }
                    };

                    $scope.obj.triggerClick(undefined, args);
                });

                it('lat should exist', function() {
                    expect($scope.obj.lat).not.toEqual(null);
                });

                it('lat should be 41.83682786072714', function() {
                    expect($scope.obj.lat).toEqual(41.83682786072714);
                });

                it('lon should exist', function() {
                    expect($scope.obj.lon).not.toEqual(null);
                });

                it('lon should be -114.169921875', function() {
                    expect($scope.obj.lon).toEqual(-114.169921875);
                });

                /*describe('after run triggerClick function with kind var = 0', function() {
                    beforeEach(function() {
                        $scope = {};
                        controller = WeatherController('WeatherController', { $scope: $scope });

                        var args = {
                            leafletEvent: {
                                latlng: {
                                    lat: 41.83682786072714,
                                    lng: -114.169921875
                                }
                            }
                        };

                        $scope.obj.kind = '0';
                        $scope.obj.triggerClick(undefined, args);
                    });

                    describe('response', function() {
                        it('should exist', function() {
                            expect($scope.obj.response).not.toEqual(null);
                        });

                        it('.place should exist', function() {
                            expect($scope.obj.response.place).not.toEqual(null);
                        });

                        it('.place should be Delano (historical)', function() {
                            expect($scope.obj.response.place).toEqual("Delano (historical)");
                        });

                        it('.success should exist', function() {
                            expect($scope.obj.response.success).not.toEqual(null);
                        });

                        it('.success should be true', function() {
                            expect($scope.obj.response.success).toEqual(true);
                        });

                        it('.weather should exist', function() {
                            expect($scope.obj.response.weather).not.toEqual(null);
                        });

                        it('.temp should exist', function() {
                            expect($scope.obj.response.temp).not.toEqual(null);
                        });

                    });
                });

                describe('after run triggerClick function with kind var = 1', function() {
                    beforeEach(function() {
                        $scope = {};
                        controller = WeatherController('WeatherController', { $scope: $scope });

                        var args = {
                            leafletEvent: {
                                latlng: {
                                    lat: 41.83682786072714,
                                    lng: -114.169921875
                                }
                            }
                        };

                        $scope.obj.kind = '1';
                        $scope.obj.triggerClick(undefined, args);
                    });

                    describe('response', function() {
                        it('should exist', function() {
                            expect($scope.obj.response).not.toEqual(null);
                        });

                        it('.uv should exist', function() {
                            expect($scope.obj.response.uv).not.toEqual(null);
                        });

                        it('.success should exist', function() {
                            expect($scope.obj.response.success).not.toEqual(null);
                        });

                        it('.success should be true', function() {
                            expect($scope.obj.response.success).toEqual(true);
                        });
                    });
                });*/
            });
        });



    });
})();