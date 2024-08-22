/// <reference types="cypress" />
require('cypress-xpath')
require('cypress-plugin-tab')
import 'cypress-file-upload'

describe("Upload Imagens", () =>{

it("Cargando imagenes",() =>{
    cy.visit("https://demoqa.com/automation-practice-form")
    cy.title().should("eq","DEMOQA")

    //const ruta = naruto.jpg
   // cy.get('[type="file"]').attachFile(ruta)

})

})