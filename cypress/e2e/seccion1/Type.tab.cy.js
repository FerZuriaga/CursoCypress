/// <reference types="cypress" />
require('cypress-plugin-tab')

describe("Ejemplo funcion Tab", () =>{

    it("Type con Tab",() =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq', 'DEMOQA')
        cy.wait(2000)

        cy.get('#firstName').type("Alfabica").tab().
        type("Piscis").tab().
        type("albafica@gmail.com")
        
    })
    
    })