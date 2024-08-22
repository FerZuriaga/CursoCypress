

/// <reference types="cypress" />

require('cypress-xpath')
require('cypress-plugin-tab')

describe("Nueva seccion Select", () =>{

    it("Select 1(aca se supone que seleccionas cualquer elemento dentro del select)",() =>{
        cy.visit("...")
        cy.title().should("eq", "Google")
        cy.wait(1000)
        
      cy.get("#select-demo").should("be.visible").select("Friday").should("have.value", "Friday")
        
        
        
    })

    it("Select dos",() =>{
        cy.visit("https://www.google.com/")
        cy.title().should("eq", "Google")
        cy.wait(1000)
        
        cy.get("[name='q']").should("be.visible").type("Ferrari {enter}")
        cy.get('[data-hveid="CA4QAA"] > .nPDzT > .YmvwI').click()
        
        
        
    })

    it("Opcion multiselect( la pagina no anda copie ejemplo) ",() =>{
        cy.visit("seleniumeasy.com/test/")
        cy.title().should("eq", "Google")
        cy.wait(1000)
        
        cy.get("[name='q']").should("be.visible").type("Ferrari {enter}")
        cy.get('[data-hveid="CA4QAA"] > .nPDzT > .YmvwI').click()

        cy.get("#multi-select").should("be.visible").select(["California","Ohio","Washington"]).then(() =>{
            cy.get("#printMe").should("be.visible").click()
        })
             
    })


    it.only("Select 1(aca se supone que seleccionas cualquer elemento dentro del select)",() =>{
        cy.visit("https://demoqa.com/select-menu")
        cy.title().should("eq","DEMOQA")

        //cy.get("#oldSelectMenu").select("Green").should("have.value","2")
        cy.get("#cars").should("be.visible").select(["volvo","opel"])
        
        

        
        
        
    })
   
    
    })