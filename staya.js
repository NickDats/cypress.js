
describe('Aвторизация.Staya', function () {
   it('Позитивный кейс авторизации', function () {
        cy.visit('https://staya.dog');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('ndatciuk@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('Ndatcqa80.1');
        cy.get('.auth-form__submit >.s-button__content').click();
        cy.contains('Мои заказы');
    })
})
