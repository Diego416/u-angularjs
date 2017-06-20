(function() {
    'use strict';

    describe('directive card', function() {
        var $compile, $rootScope, $timeout, element, html;

        beforeEach(module('angularApp'));

        beforeEach(inject(function($injector, $templateCache) {
            $compile = $injector.get('$compile');
            $rootScope = $injector.get('$rootScope');
            $timeout = $injector.get('$timeout');

            var templateUrl = 'app/components/card/card.html';
            var template = $templateCache.get(templateUrl);
            $templateCache.put(templateUrl, template);

            $rootScope.card = {
                title: '',
                description: '',
                background: '',
                textColor: '',
                icon: '',
                favorite: function() {
                    return true;
                },
                reservedBy: '© Talos Business Card'
            };

            html = '<card title="card.title"' +
                'description="card.description"' +
                'background="card.background"' +
                'text-color="card.textColor"' +
                'reserved-by="{{card.reservedBy}}"' +
                'cb-favorite="card.favorite(title)"' +
                'icon="{{card.icon}}">' +
                '</card>';
        }));

        describe('Test without parameters', function() {
            it('Should take only the reservedBy', function() {
                element = $compile(angular.element(html))($rootScope);
                $rootScope.$digest();
                expect(element.find('.reservedBy').text()).toEqual($rootScope.card.reservedBy);
            });
        });

        describe('Test with parameters', function() {
            beforeEach(function() {
                $rootScope.card = {
                    title: 'Juan Diego',
                    description: 'Talos Digitial',
                    background: 'rgb(77, 77, 77)',
                    textColor: 'rgb(55, 255, 55)',
                    icon: 'account_circle',
                    favorite: function(title) {
                        return title;
                    },
                    reservedBy: '© Talos Business Card'
                };
                element = $compile(angular.element(html))($rootScope);
                $rootScope.$digest();
            });

            it('Should set title', function() {
                expect(element.find('.title').text()).toEqual($rootScope.card.title);
            });

            it('Should set description', function() {
                expect(element.find('.description').text()).toEqual($rootScope.card.description);
            });

            it('Should set icon', function() {
                expect(element.find('.icon').text()).toEqual($rootScope.card.icon);
            });

            it('Should set style', function() {
                expect(element.css('background-color')).toEqual($rootScope.card.background);
                expect(element.css('color')).toEqual($rootScope.card.textColor);
            });

            it('Should add a favorite', function() {
                spyOn($rootScope.card, 'favorite');
                element.find('.favorite').click();
                expect($rootScope.card.favorite).toHaveBeenCalledWith($rootScope.card.title);
            });

        });
    });
})();