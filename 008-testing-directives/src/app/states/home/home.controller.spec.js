(function() {
    'use strict';

    describe('HomeController', function() {
        var suite = {};

        beforeEach(module('angularApp'));

        beforeEach(inject(function($injector) {
            suite.$controller = $injector.get('$controller');
            suite.$rootScope = $injector.get('$rootScope');
            suite.RESERVED_BY = $injector.get('RESERVED_BY');
            suite.scope = suite.$rootScope.$new();

            suite.vm = suite.$controller('HomeController', {
                RESERVED_BY: suite.RESERVED_BY,
                $scope: suite.scope
            });
        }));

        it('should be registered', function() {
            expect(suite.vm).not.toEqual(null);
        });

        describe('setFavorite function', function() {
            it('should exist', function() {
                expect(suite.vm.card.setFavorite).toBeDefined();
            });

            it('should add a new favorite', function() {
                spyOn(suite.vm.card, 'setFavorite').and.callThrough();
                suite.vm.card.setFavorite('Juan Diego');
                expect(suite.vm.card.setFavorite).toHaveBeenCalledWith('Juan Diego');
                expect(suite.vm.favoriteList).toEqual(['Juan Diego']);
            });

        });

        describe('setIcon function', function() {
            it('should exist', function() {
                expect(suite.vm.setIcon).toBeDefined();
            });

            it('should set new Icon', function() {
                spyOn(suite.vm, 'setIcon').and.callThrough();
                suite.vm.setIcon('account_circle');
                suite.$rootScope.$digest();
                expect(suite.vm.setIcon).toHaveBeenCalledWith('account_circle');
                expect(suite.vm.card.icon).toEqual('account_circle');
            });

        });

    });
})();