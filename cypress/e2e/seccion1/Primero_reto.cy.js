/// <reference types="cypress" />

require('cypress-plugin-tab')

describe("Primer Reto", () =>{

    it("",() =>{
        cy.visit("https://demoqa.com/webtables")
        cy.title().should('eq', 'DEMOQA')

        cy.get('#searchBox').should("be.visible").type("cierra")
        cy.get('#searchBox').should("be.visible").clear()

        //agregando campo
        cy.get('#addNewRecordButton').should("be.visible").click()
        cy.get('#firstName').should("be.visible").type("Juan").tab().
        type("Perez").tab().
        type("Perez@hotmail.com").tab().type("35").tab().type("3000").tab().type("sistemas")
        cy.get('#submit').should("be.visible").click()


        cy.get('#searchBox').should("be.visible").type("Juan")
        cy.get('#searchBox').should("be.visible").clear()

        //Editar un campo
        cy.get("#edit-record-3").should('be.visible').click()
        cy.wait(1000)
            cy.get("#age").should("be.visible").clear().type("50")
            cy.wait(2000)
            cy.get("#salary").should("be.visible").clear().type("50000")
            cy.get("#submit").should("be.visible").click()
            cy.get("#delete-record-2").should("be.visible").click()

        

    
    })
    
    })
    