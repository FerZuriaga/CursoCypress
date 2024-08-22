/// <reference types="cypress" />
require('cypress-xpath')
require('cypress-plugin-tab')

describe("Probando Invokes", () =>{

    it("Invoke Text",() =>{
        cy.get("testpage.herokuapp.com/styled/validation/input-validation.html")
        cy.title()

        cy.get(".page-body > :nth-child(5)").invoke("text").as("info")
        cy.get("@info").should("contain","The information will be submitted..")

        cy.get("[for='firstname']").invoke("text").as("title_name")
        cy.get("@title_name").should("contain","First name:").then(()=>{
        cy.get("#firstname").type("Rodrigo")
        })
    
    }) 



    it("Invoke Estilos",() =>{
        cy.get("testpage.herokuapp.com/styled/validation/input-validation.html")
        cy.title()

        cy.get("[for='firstname']").invoke("attr", "style","color:Blue; font-size: 15px")


        
    
    }) 


    it("Invoke Ocultar y Mostrar",() =>{
        cy.get("testpage.herokuapp.com/styled/validation/input-validation.html")
        cy.title()

        cy.get("[for='firstname']").invoke("hide")
        cy.get("#firstname").invoke("hide")

        cy.get("[for='firstname']").invoke("show", "2s")
        cy.get("#firstname").invoke("show", "3s")


        
    
    }) 

    it("Invoke Ocultar y Mostrar Reto",() =>{
        cy.get("testpage.herokuapp.com/styled/validation/input-validation.html")
        cy.title()

       cy.get("[for='surname']").invoke("hide")
       cy.get("#surname").invoke("hide")

       cy.get("#firstname").should("be.visible").type("Pepe").then(()=>{
        cy.get("[for='surname']").invoke("show", "3s")
        cy.get("#surname").invoke("show","4s")
        cy.get("#surname").type("Grillo")

       })     
    
    }) 


    it("Invoke Src",() =>{
        cy.get("testpage.herokuapp.com/styled/validation/input-validation.html")
        cy.title()

        cy.xpath("//img[contains(@contains(@class,'cht')]").invoke("attr","src").should("include", "pone el valor del atributo")

   
    
    }) 


    it("Invoke Target blank",() =>{
        cy.get("dvwa.co.uk") //otra pagina que no anda.. pero aca solo el profe ve lo del elemento blank
        cy.title()

        cy.get("pones el elemento").invoke("remoeAttr","target") //removes el atributo target

   
    
    }) 
})