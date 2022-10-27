
describe('Успешная авторизация', function () {
   it('Позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#exitMessageButton > .exitIcon').should('exist').and('be.visible');
        cy.contains('Авторизация прошла успешно').should('be.visible');
    });
})
