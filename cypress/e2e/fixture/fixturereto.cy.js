/// <reference types='cypress' />

require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe('Carga por Fixture', () =>{ 
   
    //  before(function(){
    //      cy.fixture("../e2e/fixture/datos2.json").then(function(data){
    //         //this.data=data
    //       globalThis.data=data
    //      })
    //  })

    //  before(function(){
    //     cy,fixture("../e2e/fixture/datos2.json").as("datos_json")
    //  })
       
   
    it('test',() => {
        
        // cy.visit('https://demoqa.com/text-box')
        // cy.title().should('eq','DEMOQA')

        cy.fixture("../e2e/fixture/datos2.json").then( testdata =>{
            testdata.forEach(data => {
                const d_nombre =data.nombre
                const d_email =data.email
                const d_dir1 =data.dir1
                const d_dir2 =data.dir2

                cy.visit('https://demoqa.com/text-box')
                cy.title().should('eq','DEMOQA')

                cy.get("#userName").type(d_nombre)
                cy.get("#userEmail").type(d_email)
                cy.get("#currentAddress").type(d_dir1)
                cy.get("#permanentAddress").type(d_dir2)
                cy.get('#submit').should('be.visible').click({force:true})

            })
        })
        

        // cy.get("@datos_json").then((data)=>{

        // })

         
        
    })


    
})