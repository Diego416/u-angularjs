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

        it('Test without parameters', function() {
            element = $compile(angular.element(html))($rootScope);
            $rootScope.$digest();
            expect(element.find('.reservedBy').text()).toEqual($rootScope.card.reservedBy);
        });

        it('when render, no errors has to show', function() {
            $rootScope.card = {
                title: 'Juan Diego',
                description: 'Talod Digitial',
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

            spyOn($rootScope.card, 'favorite');

            expect(element.find('.title').text()).toEqual($rootScope.card.title);
            expect(element.find('.description').text()).toEqual($rootScope.card.description);
            expect(element.find('.icon').text()).toEqual($rootScope.card.icon);
            //Wait until the style is set
            $timeout(function() {
                expect(element.find('.card').css('background-color')).toEqual($rootScope.card.background);
                expect(element.find('.card').css('color')).toEqual($rootScope.card.textColor);
            }, 100);
            element.find('.favorite').click();
            expect($rootScope.card.favorite).toHaveBeenCalledWith($rootScope.card.title);
        });
    });
})();