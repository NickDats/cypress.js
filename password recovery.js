
describe('Восстановление пароля', function () {
   it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('nchfye@gmail.com');
        cy.get('#restoreEmailButton').click();
        cy.get('#exitMessageButton > .exitIcon').should('exist').and('be.visible');
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
    })
})
