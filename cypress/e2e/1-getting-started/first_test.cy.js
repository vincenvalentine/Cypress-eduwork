/// <reference types="cypress" />


describe('my first test', () => {
    it('clicking "type" show the right heading', () => {
        cy.visit ('https://example.cypress.io')
        // cy.pause()
        cy.contains('type').click()

        //should be on a new url which include /commands/actions
        cy.url().should('include', '/commands/actions') 
        cy.get('.action-email')
            .type('nasiaja@gmail.com')
            .should('have.value','nasiaja@gmail.com')
    });
});