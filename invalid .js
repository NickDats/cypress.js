describe('Авторизация с невалидными данными', function () {
   it('Негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germ@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#exitMessageButton > .exitIcon').should('exist').and('be.visible');
        cy.contains('Такого логина или пароля нет').should('be.visible');
    }),

   it('Негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('ioveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#exitMessageButton > .exitIcon').should('exist').and('be.visible');
        cy.contains('Нужно исправить проблему валидации').should('be.visible');
   })
})