/// <reference types="cypress" />

require('cypress-xpath')

describe("Tipos de Selectores", () =>{

    it("Selector por id",() =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq","DEMOQA")

        cy.get ("#userName").should("be.visible").type("Albafica")
        cy.get('#userEmail').should("be.visible").type("demo@gmail.com")
    })


    it("Selector por Atributo",() =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq","DEMOQA")

        cy.get ("[placeholder='Full Name']").should("be.visible").type("Albafica Piscis")
        
    })


    it("Selector por Xpath",() =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq","DEMOQA")

        cy.xpath("//*[@id='userName']").should("be.visible").type("Juan Perez")
        cy.wait(2000)
        cy.xpath("//input[contains(@placeholder,'Full Name')]").should("be.visible").type("nose@hotmail.com")
        cy.wait(1000)
        cy.xpath("//textarea[contains(@id,'currentAddress')]").should("be.visible").type("demo")
    })
    

    it("Selector por Contains",() =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should("eq","DEMOQA")

        cy.get(".custom-control-label").contains("Male").click()
        cy.wait(1000)
        cy.get(".custom-control-label").contains("Other").click()
        
    })



    it.only("Selector por CopySelector",() =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should("eq","DEMOQA")

        cy.get("#userNumber").should("be.visible").type("34435")

        
        
    })

    })