/// <reference types='cypress' />

require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe('Reto cypress por comandos personalizados', () =>{ 
    let tiempo = 1000
    before(()=>{  
        cy.visit('La de selenium')
        cy.title().should('eq','titulo')
        cy.wait(tiempo)
    })
    it('test invalida de nombre',() => {
        cy.Bloque_reto_from("dasda","Perez","carlos@gmail.com","51515555","direccion1","Bolivia","Alabama","08210","demo.com","Proyecto",1000)
        cy.Validar_Campo("pones el selector del mensaje del error", "aca el mensaje", "y el log que diga (nombre) para el ejm")
        cy.wait(tiempo)      
    })

    it('Prueba invalida por Email',() => {
        cy.Bloque_reto_from("Carlos","","carlito.com","51515555","direccion1","Bolivia","Alabama","08210","demo.com","Proyecto",1000)
        cy.Validar_Campo("//small[contains(@data-bv-validator, 'email-Address')]","Pleas supply a valid email address", "email")
        cy.Validar_Campo2("//small[contains(@data-bv-validator,'emailAddress')]","Pleasy...","Email")
        cy.wait(tiempo)      
    })

    it('Prueba invalida de apellido',() => {
        cy.Bloque_reto_from("Carlos","","carlos@gmail.com","51515555","direccion1","Bolivia","Alabama","08210","demo.com","Proyecto",1000)
        
        cy.wait(tiempo)      
    })

    it('Prueba valido',() => {
        cy.Bloque_reto_from("Carlos","Perez","carlos@gmail.com","51515555","direccion1","Bolivia","Alabama","08210","demo.com","Proyecto",1000)
        
        cy.wait(tiempo)      
    })
})