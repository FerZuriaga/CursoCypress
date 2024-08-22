/// <reference types='cypress' />

require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe('Hooks', () =>{ 

    before(() => {
        cy.log("Principio de todo")

    })

    beforeEach(()=>{
        cy.log("Esto se repite en cada uno de los test muy importante")
    })

    afterEach(()=>{
        cy.log("esto se hace al final de todos los test")
    })

    after(()=>{
        cy.log(" ############## Ultimo ciclo.. final de todo ########")

    })


    it("test uno",()=>{
        cy.log("test uno")
    })


    it('test dos',() => { 
      
    })
})