/// <reference types="cypress" />

describe("Introduccion a los assert", () =>{

    it("Demo con los Asserts",() =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq', 'DEMOQA')
        cy.wait(2000)

        cy.get('#firstName').should("be.visible").type("Pedro")
        cy.wait(3000)
        cy.get('#lastName').should("be.visible").type("Pere")
        cy.wait(3000)
        cy.get('#userEmail').should("be.visible").should("be.enabled").type("perez@hotmail.com")
        
    })
    
    })