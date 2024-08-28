/// <reference types="cypress" />
require('cypress-xpath')
require('cypress-plugin-tab')

describe("Demo de una Rest Api", () =>{

    it("Test uno",() =>{
        const datos ={
            "Nombre": "Rodrigo",
            "Ap": "Pere",
            "Am": "Nieto",
            "Tel": "6232131",
            "Dir": "Demo de la Direccion",
            "Cursos": [
                {
                    "Nombre": "Php",
                    "Descripcion": "lenguaje de programacion"
                },
                {
                    "Nombre": "Java",
                    "Descripcion": "lenguaje de programacion"
                },
                {
                    "Nombre": "Python",
                    "Descripcion": "lenguaje de programacion"
                }
            ]
        }

        cy.log(datos.Nombre)
        cy.log(datos.Dir)
        cy.log(datos.Cursos)
        cy.log(datos.Cursos[1])
        cy.log(datos.Cursos[2].Nombre)

        
        
    })

})