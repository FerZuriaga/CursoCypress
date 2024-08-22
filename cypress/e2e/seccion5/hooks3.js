/// <reference types='cypress' />

require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe('descripcion', () =>{ 
    let tiempo = 1000
    before(()=>{  
        cy.visit('url')
        cy.title().should('eq','titulo')
        cy.wait(tiempo)
    })
    it('test',() => {
        let tiempo = 1000
        cy.visit('test')
        cy.title().should('eq','ttitulo')
        cy.wait(tiempo)
    })
})