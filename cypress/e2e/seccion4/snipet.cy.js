/// <reference types="cypress" />
require('cypress-xpath')
require('cypress-plugin-tab')

describe("Configuracion y uso de los snippets", () =>{

    it("",() =>{
    cy.visit("https://demoqa.com/text-box")
    cy.title().should("eq","DEMOQA")

    cy.get("#userName").should("be.visible").type("Pepe")
    
    cy.get('[argumento]').should('be.visible').type('')
    cy.wait(1000)
    
    })

   cy.get('[argumento]').should('be.visible').click({force:true})
   cy.wait(1000)
   

   
})