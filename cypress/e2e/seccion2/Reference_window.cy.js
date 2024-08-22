/// <reference types="cypress" />
require('cypress-xpath')
require('cypress-plugin-tab')

describe("Referencias a Windows", () =>{

it("Window propiedad charset",() =>{
    cy.visit("https://testsheepnz.github.io/random-number.html")
    cy.title().should("eq","The Number Game")
    cy.wait (1500)

    cy.document().should("have.property","charset"),and("eq", "UTF-8")       //con el comando document estoy diciendo  que el documento como tal , la pagina que estas abriendo, vamos a generar un accert, esto se genera con la propiedad HAVE.PROPERTY
//CHARSET ES UN PARAMETRO Y UTF ES SU VALOR

})

it("Window URL",() =>{
    cy.visit("https://testsheepnz.github.io/random-number.html")
    cy.title().should("eq","The Number Game")
    cy.wait (1500)

    cy.url().should("include","random-number.html")
    cy.url().should("eq","random-number.html") //esto no va a funcionar por que eq pide que sea ccompleta
    cy.url().should("eq","https://testsheepnz.github.io/random-number.html")
    

   
})

})