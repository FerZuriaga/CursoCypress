/// <reference types="cypress" />
require('cypress-xpath')
require('cypress-plugin-tab')

describe("Demo de una Rest Api", () =>{

    it("Test uno",() =>{
        const datos ={
            "Nombre": "Rodrigo",
            "Ap": "Pere",
            "Am": "Nieto",
            "Tel": "6232131",
            "Dir": "Demo de la Direccion"
        }

        cy.log(datos["Nombre"])
        cy.log(datos["Ap"])
        cy.log(datos["Am"])
        cy.log(datos["Tel"])
        
        
    })

})