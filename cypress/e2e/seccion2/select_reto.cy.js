/// <reference types="cypress" />

require('cypress-xpath')
require('cypress-plugin-tab')

describe("Reto select (solo lo hago por ver, no tengo pagina", () =>{

    it("Select 1(aca se supone que seleccionas cualquer elemento dentro del select)",() =>{
        cy.visit("...")

        cy.get(".pickData").select(["Maria","Juan","Pepe","Juancho"]).then(()=>{
            cy.get(".pAdd").should("be.visible").click().then(()=>{
                cy.get(".pAddAll").click().then(()=>{
                    cy.log("Se movieron todos los elemento")
                })
            })
        })
        

        
        
        
    })

    it.only("Select 1(aca se supone que seleccionas cualquer elemento dentro del select)",() =>{
        cy.visit("https://demoqa.com/select-menu")

        //cy.get("#oldSelectMenu").select("Green").should("have.value","2")
        
        cy.get(':nth-child(8) > .col-md-6 > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').click().next().eq(2).click()
         //cy.get(".css-2613qy-menu").click()
        

        
        
        
    })

})