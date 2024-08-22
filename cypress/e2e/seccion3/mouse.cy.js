/// <reference types="cypress" />
require('cypress-xpath')
require('cypress-plugin-tab')
import 'cypress-file-upload'

require('@4tw/cypress-drag-drop')

describe("Cypress eventos Mouse", () =>{

it("Drag and drop",() =>{

    let tiempo=1000
    
    cy.visit("the-internet.herokuapp.com/drag_and_drop")
    cy.title().should("eq","The Internet")
    cy.wait(1500)

    cy.get("#column-a").drag("#column-b",{force:true})

})
it("Mouse Over",() =>{

    let tiempo=1000
    
    cy.visit("https://www.way2automation.com/")
    cy.title().should("eq","Get Online Selenium Certification Course | Way2Automation")
    cy.wait(1500)

    cy.contains("Selenium").trigger("mouseover") //con el trigger estoy activando eventos y con el mouseover digo que el mouse pase encima de lo que quiero(en este ejemplo se posiciona en el selenium y queda ahi)
    cy.contains("Selenium Python Video Tutorial").invoke("removeAttr", "target") //con el invoke decis que remuev el atributo target (por que te maanda a otra pagina) con esto lo sacas

   

})
it("slider",() =>{

    let tiempo=1000
    
    cy.visit("https://www.way2automation.com/")
    cy.title().should("eq","Get Online Selenium Certification Course | Way2Automation")
    cy.wait(1500)

    cy.get("#slider1 > .ranger > input").invoke("attr","value","80") //con el invoke digo que agarre el atributo "Valor" y lo mueva hasta 80

   

})




})