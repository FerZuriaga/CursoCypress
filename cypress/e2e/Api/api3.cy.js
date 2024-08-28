/// <reference types="cypress" />
require('cypress-xpath')
require('cypress-plugin-tab')

describe("api consulta GET", () =>{
    let datos;

    it("Test api GET",() =>{
        datos =cy.request("http://localhost:3000/posts")

        datos.its("status").should("eq",200)        

        
    })

    it("Test api GET 2",() =>{
        datos =cy.request("http://localhost:3000/posts")
        .should((response) =>{
            expect(response.status).to.eq(200)
        })
     
    })

    it("Test api get metodo dos", () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers:{
                accept: "application/json"
            }

        }).then(response =>{
            let datos;
            datos = JSON.parse(JSON.stringify(response.body))

            cy.log(datos)

            expect(datos[0]).has.property("title", "json-server")
        })
    })

})