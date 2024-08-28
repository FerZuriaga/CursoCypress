/// <reference types="cypress" />
require('cypress-xpath')
require('cypress-plugin-tab')

describe("Demo para random", () =>{

    let tiempo = 500
    let numero_pruebas = 10

    it("Test random",() =>{
        for (let num= 1 ; num <=numero_pruebas; num++)
        {
            let estado_Arr = ["1: 1", "3: 13"," 5: 32"]
            let random_estado = estado_Arr[Math.floor(Math.random()*estado_Arr.length)]
            let cantidad = Math.floor(Math.random()*3000)

            cy.visit("https://demoqa.com/webtables")
            cy.title().should('eq', 'DEMOQA')

            cy.get('#firstName').should("be.visible").type("Jname"+cantidad).tab()


        }


     
        
        
    })

})