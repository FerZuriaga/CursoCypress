/// <reference types="cypress" />

describe("Ejemplo de Type pageUp", () =>{

    it("Type PageUp",() =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', "DEMOQA")
        cy.wait(1000)

        cy.get('#userName').type('{pageup}')
    
    })

    it("Type PageDown",() =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', "DEMOQA")
        cy.wait(1000)

        cy.get('#userName').type('{pagedown}')
    
    })

    it.only("Type Ultimo",() =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', "DEMOQA")
        cy.wait(1000)

        cy.get('#userName').type('{pagedown}')
    
    })
    
    })