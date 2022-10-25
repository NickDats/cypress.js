
describe('Авторизация с невалидным паролем', function () {
   it('Негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('ioveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#exitMessageButton > .exitIcon');
        cy.contains('Нужно исправить проблему валидации');
    })
})
