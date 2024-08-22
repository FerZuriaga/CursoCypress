import ProyectoUno_PO from '../../support/pageObjects/proyecto1_PO/protectoUno_PO'

/// <reference types='cypress' />

require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe('Page objercts Models', () =>{ 

    const master =new ProyectoUno_PO()  //aca elviejo usa una pagina que no anda ya..yo lo copio nomas para tener idea
    master.visitHome()

    Cypress.on('uncaught:exception', (err,runnable) =>{ //esto cuando tiraba el uncaught
        return false
    })
    

    it('test seccion1',() => {
        master.SeccionUno("juan","Perez","carlos@gmail.com",1000)
                
    })

    it('test seccion2',() => {
        master.SeccionDos("321323","DIRECCION1","Estados Unidos", "Colorado",1000)
        cy.Validar_campo2("//small[contains(@data-bv-validator,'phone')]","Please  supply a valid phone","telefono")
                
    })

    it('test seccion3',() => {
        master.SeccionTres("5006","Demo.com","Proyecto uno demo",1000) //la linea de abajo tendriaque sacar Proyecto demo y dsp usaria el comando de abajo
        cy.Validar_campo2("//small[@class='help-block'][contain(..)","Please  supply a description..","proyecto")
                
    })

    //podemos hacer todo en un test

    it('test seccion1',() => {
        master.SeccionUno("juan","Perez","carlos@gmail.com",1000)
        master.SeccionDos("321323","DIRECCION1","Estados Unidos", "Colorado",1000)
        master.SeccionTres("5006","Demo.com","Proyecto uno demo",1000)       
    })
})