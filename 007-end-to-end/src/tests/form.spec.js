describe('Business card app', function() {

    beforeEach(function() {
        //You should run 'gulp serve' first
        //Be sure the port number is correct
        browser.get('http://localhost:3000/#/');
    });

    it('should set icon', function() {
        var icon = element.all(by.repeater('icon in homeCtrl.icons')).first();

        icon.click();

        expect(element(by.id('icon')).getText()).toEqual("account_circle");
    });

    it('should set backgrond color', function() {
        var background = element.all(by.model('value')).get(0);

        background.sendKeys("rgba(145, 145, 145, 1)");

        expect(element(by.id('card')).getCssValue('background-color')).toEqual("rgba(145, 145, 145, 1)");
    });

    it('should set text color', function() {
        var textColor = element.all(by.model('value')).get(1);

        textColor.sendKeys("rgba(18, 128, 10, 1)");

        expect(element(by.id('card')).getCssValue('color')).toEqual("rgba(18, 128, 10, 1)");
    });

    it('should set title', function() {
        var title = element(by.model('homeCtrl.card.title'));

        title.sendKeys("Juan Diego Muñoz");

        expect(element(by.id('cardTitle')).getText()).toEqual("Juan Diego Muñoz");
    });

    it('should set description', function() {
        var description = element(by.model('homeCtrl.card.description'));

        description.sendKeys("Ingeniero de sistemas");

        expect(element(by.id('cardDescription')).getText()).toEqual("Ingeniero de sistemas");
    });

    it('should set card to favorite list', function() {
        var btnFavorite = element(by.id('favoriteBtn'));

        btnFavorite.click();

        var favoriteList = element.all(by.repeater('favorite in homeCtrl.favoriteList track by $index')).count();

        expect(favoriteList).not.toEqual(0);
    });
});