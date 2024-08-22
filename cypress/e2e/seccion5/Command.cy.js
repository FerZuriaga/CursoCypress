/// <reference types='cypress' />

require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe('Comandos personalizados', () =>{ 
    let tiempo = 1000
    before(()=>{  
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','DEMOQA')
        cy.wait(tiempo)
    })
    it('Demo Uno',() => {
        
    cy.Texto_visible("#userName","Juan",500)
     //aca ya paso el  valor al parametro
     cy.Texto_visible("#userEmail","juancho@hotmail.com",200)
     cy.Texto_visible_xpath("//textarea[contains(@id,'currentAddress')]","direccion uno",100)
     cy.Texto_visible_xpath("//textarea[contains(@id,'permanentAddress')]","direccion dos",100)
    
     cy.Click_force_xpath("//button[contains(@id,'submit')]",500)
    })

    it.only('Demo Dos por bloque',() => {
        
        cy.bloque_DEMOQA_Dos("Juan","Juancito@gmail.com","direccion uno","direccion dos",600)
        //cy.bloque_DEMOQA("Juan","Juancito@gmail.com","direccion1","direccion2",600)
    })
    
})