/// <reference types='cypress' />

require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe('Record Cypress Studio', () =>{ 
    
    it('test',() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            return false;
        });

        let tiempo = 1000
        cy.visit('https://demoqa.com/elements')
        cy.title().should('eq','DEMOQA')
        cy.wait(tiempo)


        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click();
        cy.get('#userName').clear('');
        cy.get('#userName').type('Albafica');
        cy.get('#userEmail').clear('');
        cy.get('#userEmail').type('albafica@hotmail.com');
        cy.get('#currentAddress').click()
        cy.get('#currentAddress').type("dir1");
        cy.get('#permanentAddress').click()
        cy.get('#permanentAddress').type("dir2");
        cy.get('#submit').click();
        /* ==== End Cypress Studio ==== */
    })
  
    
})