/// <reference types="cypress" />
require('cypress-xpath')
require('cypress-plugin-tab')

describe("Alertas en Cypress", () =>{

    it("Alertas Uno",() =>{

        cy.visit("selenium.com")
        cy.title()
        
        cy.xpath("//a[@href-'#myModal0']").click()
        // cy.on("window:alert", (str)=>{ //nunca le anduvo al viejo esto 
        //     expect(str).to.equal("This is the place where the contnet for the modal dialog displays")

        // })
        cy.xpath("(//a[@href='#'][contains(.,'Save changes')])[1]").click()

})

})