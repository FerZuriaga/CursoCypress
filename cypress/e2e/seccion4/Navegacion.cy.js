/// <reference types='cypress' />

require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe('Navegacion entre paginas', () =>{ 
    it('Back, forward',() => { 
        let tiempo = 1000
        cy.visit("https://demoqa.com")
        cy.title().should('eq','DEMOQA')
        cy.wait(tiempo)

        cy.get(':nth-child(1) > :nth-child(1) > .card-up').should('be.visible').click({force:true})
        cy.wait(1000)

        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0 > .text').should('be.visible').click()
        cy.wait(1000)

        cy.go("back")

    })

    it.only('Reload',() => { 
        let tiempo = 1000
        cy.visit("https://demoqa.com")
        cy.title().should('eq','DEMOQA')
        cy.wait(tiempo)

        cy.get(':nth-child(1) > :nth-child(1) > .card-up').should('be.visible').click({force:true})
        cy.wait(1000)

        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0 > .text').should('be.visible').click()
        cy.wait(1000)

        cy.get('#userName').type("Pepito")
        cy.get('#userEmail').type("peito@hotmail.com")
        cy.wait(tiempo)

        cy.reload()

    })
})