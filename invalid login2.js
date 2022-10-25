
describe('Авторизация с невалидным логином', function () {
   it('Негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germ@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#exitMessageButton > .exitIcon');
        cy.contains('Такого логина или пароля нет');
    })
})
