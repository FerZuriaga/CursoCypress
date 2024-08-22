/// <reference types="cypress" />
require('cypress-xpath')
require('cypress-plugin-tab')

describe("Manejo de los Alias", () =>{

    it("Alias Uno",() =>{

        cy.visit("testpage.herokuapp.com/styled/validation/input-validation.html")
        cy.title()

        cy.get("#firstname").should("be.visible").as("nom")
        cy.get("@nom").type("Juancito")
        cy.get("#surname").should("be.visible").as("ap")
        cy.get("@ap").type("Perez")
        cy.get("#age").should("be.visible").as("edad")
        cy.get("#country").should("be.visible").as("pais")
        cy.get("#notes").should("be.visible").as("notas")

        cy.get("@edad").type("40")
        cy.get("@pais").select("Argentina").should("have.value","Argentina")
        cy.get("@notas").type("Demo del contenido")

        cy.get("[type='submit']").click({force:true})
        


    

})

})