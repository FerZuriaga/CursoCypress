
/// <reference types="cypress" />

require('cypress-xpath')
require('cypress-plugin-tab')

describe("Segundo Reto", () =>{

    it("Probando la aplicacion",() =>{
        cy.visit("https://computer-database.gatling.io/computers")
        cy.title().should("eq","Computers database")
        

        //buscando
        cy.xpath("//input[contains(@id,'searchbox')]").type("ACE")
        cy.get("#searchsubmit").should("be.visible").click()

        //add
        cy.get('#add').should("be.visible").click()
        cy.get('#name').should("be.visible").type("cypress")
        cy.get("#introduced").should("be.visible").type("2001-03-15").tab().type("2002-01-17")
        cy.get("#company").should("be.visible").select("Nokia").should("have.value","16")
        cy.get('.primary').should("be.visible").click()
        cy.xpath("//input[contains(@id,'searchbox')]").type("cypress")
        cy.get("#searchsubmit").should("be.visible").click()
    })
    
    })



