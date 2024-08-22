c./// <reference types='cypress' />

require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe('Hooks Ejemplos', () =>{ 
    let tiempo = 1000
    before(()=>{
        let tiempo = 1000
        cy.visit('seleniumeasy.com/test/table-records-filter-demo.html')
        cy.title().should('eq','ttitulo')
        cy.wait(tiempo)
    })
    it('test uno',() => { 
        cy.get('[type="checkbox"]').check().should("be.checked")
        cy.wait(tiempo)
      
    })

    it('test dos',() => { 
        cy.get('[type="checkbox"]').uncheck().should("not.be.checked")
        cy.wait(tiempo)
      
    })
 //acordate esto no lo hago en pagina por que no tengo una pagina para checkear botones
    it('test tres',() => {  //aca prueba solamente la opcion 3 (que checkee el boton )
        cy.xpath('[type="checkbox"]').check()
        cy.wait(tiempo)
      
    })


})