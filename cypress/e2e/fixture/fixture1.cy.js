/// <reference types='cypress' />
import Datos from '../fixture/datos2.json'
require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe('Carga por Fixture', () =>{ 
   
     before(function(){
         cy.fixture("../e2e/fixture/datos2.json").then(function(data){
            //this.data=data
          globalThis.data=data
         })
     })

    //  before(function(){
    //     cy,fixture("../e2e/fixture/datos2.json").as("datos_json")
    //  })
       
   
    it('test',() => {
        
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','DEMOQA')
        

        // cy.get("@datos_json").then((data)=>{

        // })

        cy.get("#userName").type(data.nombre)
        cy.get("#userEmail").type(data.email)
        cy.get("#currentAddress").type(data.dir1)
        cy.get("#permanentAddress").type(data.dir2)
        cy.get('#submit').should('be.visible').click({force:true})
        
    })


    
})