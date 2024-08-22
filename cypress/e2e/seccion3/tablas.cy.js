/// <reference types="cypress" />
require('cypress-xpath')
require('cypress-plugin-tab')

describe("Elementos de una tabla", () =>{

    //aca selecciono de padre a hhijo
    it("Children",() =>{
        cy.visit("seleniumeasy.com/test/table-records-filter-demo.html")
        cy.title().should("eq", "Selenium Easy- Table Data Filter Demo")
        cy.get(".btn-group").children(".btn-success")                     
        cy.get(".btn-group").children(".btn-success").should("contain","Green").click({force:true})    //aca estoy diciendo que de mi padre (btn-group), buscame al hijo con el children(btn-success)


    })
    it("Seleccionar por medio de EQ",() =>{
        cy.visit("seleniumeasy.com/test/table-records-filter-demo.html")
        cy.title().should("eq", "Selenium Easy- Table Data Filter Demo")
        cy.get("[type='button']").eq(2).should("cont","Orange").click({force:true}) //aca agarra el elemento 2, no usa indice
        
    
    })

    it("Seleccionar por medio del FILTER",() =>{  //con el filter no tenes que ir de padre, a hijo, etc. podes agarrar el elemento que queres de una, osea pones la clase nomas y dsp vas al elemento que buscar
        cy.visit("seleniumeasy.com/test/table-records-filter-demo.html")
        cy.title().should("eq", "Selenium Easy- Table Data Filter Demo")
        cy.get("[type='button']").filter(".btn-warning").should("contain","Orange").click()
    
    })

    it("Seleccionar por medio del Find",() =>{  //con el find desde el elemento padre, podes agarrar uno de sus hijos
        cy.visit("seleniumeasy.com/test/table-records-filter-demo.html")
        cy.title().should("eq", "Selenium Easy- Table Data Filter Demo")
        cy.get(".btn-button").find(".btn-danger").should("contain","Red").click()
        cy.get("[type='button']").contains("Orange").click()
    })

    it("Seleccionar por el First",() =>{  
        cy.visit("seleniumeasy.com/test/table-records-filter-demo.html")
        cy.title().should("eq", "Selenium Easy- Table Data Filter Demo")
        
        //cy.get(".btn-group").first().should("contain","Green").click()
        cy.get(".btn-group").find("button").first().click()
        cy.get(".btn-group").find("button").last().click()
    })

    it("Seleccionar los elementos siguientes NextAll",() =>{  
        cy.visit("seleniumeasy.com/test/table-records-filter-demo.html")
        cy.title().should("eq", "Selenium Easy- Table Data Filter Demo")
        
        cy.get("[type='button']").should("contain","Green")
        cy.wait(1000)
        cy.get("[type='button']").should("contain","Green").nextAll().should("have.length",4)


    })

    it("Seleccionar al elemento padre",() =>{  
        cy.visit("seleniumeasy.com/test/table-records-filter-demo.html")
        cy.title().should("eq", "Selenium Easy- Table Data Filter Demo")
        
        cy.get("[type='button']").parent().should("have.class","btn-group")
        


    })

    it("Reto de las Tablas",() =>{  
        cy.visit("seleniumeasy.com/test/table-records-filter-demo.html")
        cy.title().should("eq", "Selenium Easy- Table Data Filter Demo")

        cy.get("[type='button']").eq(1).should("contain", "Green").click()

        cy.get("[type='checkbox']").check({force:true})

        cy.get("[type='button']").eq(4).should("contain", "All").click()

        cy.get("[type='checkbox']").check({force:true})
        
    

    })

    it("Reto de las Tablas con for",() =>{  
        cy.visit("seleniumeasy.com/test/table-records-filter-demo.html")
        cy.title().should("eq", "Selenium Easy- Table Data Filter Demo")

        for(let x=1; x<=4;x++){
            cy.get("[type='button']").eq(x).click()
            cy.wait(1000)
            cy.get("[type='checkbox']").check({force:true})

        }    
    

    })

    it("Reto de las Tablas con for",() =>{  
        cy.visit("seleniumeasy.com/test/table-records-filter-demo.html")
        cy.title().should("eq", "Selenium Easy- Table Data Filter Demo")

            for(let x=1; x<=4;x++){
                let nombreBoton = ""
                if(x==1){
                    nombreBoton = "Green"
                }
                else if(x==2){
                    nombreBoton = "Orange"
                }
                else if(x==3){
                    nombreBoton = "Red"
                }
                else if(x==4){
                    nombreBoton = "All"
                }


                cy.get("[type='button']").eq(x).should("contain",nombreBoton).click()
                cy.wait(1000)
                cy.get("[type='checkbox']").check({force:true})
            }    
    

    })

    it("Mostrando los campos",() =>{  
        cy.visit("seleniumeasy.com/test/table-records-filter-demo.html")
        cy.title().should("eq", "Selenium Easy- Table Data Filter Demo")

        const datos = []
        get(".odd td").each(($el,index,$list)=>{
            datos[index] = $el.text()
        }).then(() => {
            for(let i = 0; i <= datos.length; i++){
                cy.log(datos[i])
            }
        })


    })


    it("Sumando los valores de los campos con la clase .odd",() =>{  
        cy.visit("seleniumeasy.com/test/table-records-filter-demo.html")
        cy.title().should("eq", "Selenium Easy- Table Data Filter Demo")

        const datos = []
        let cantidad = 0
       // cy.get("[role='now'] td").each(($el,index,$list) aca usa el atributo en vez de la clase , RETO TABLAS VIDEO 2
        cy.get(".odd td").each(($el,index,$list)=>{  //aca agarro la clase y no toma todo los valores
            datos[index] = $el.text()
        }).then(() => {
            for(let i = 0; i <= datos.length; i++){
                cy.log(datos[i])
                if(Number(datos[i])){           //aca esta sumando los datos que correspondan con numeros
                    cantidad +=Number(datos[i])
                }
            }
            cy.log("La cantidad total es: " + cantidad)
            expect(cantidad).eq(202)
        })


    })



    it("Valor de un campo en especifico",() =>{  
        cy.visit("seleniumeasy.com/test/table-records-filter-demo.html")
        cy.title().should("eq", "Selenium Easy- Table Data Filter Demo")

       const campo =cy.get("tbody > :nth-child(7) >:nth-child(2)")
       campo.each(($el,index,$list)=>{
            const dato = $el.text()
            cy.log(dato)

            if(dato.includes("JavaScript Developer")){
                campo.eq(index).next().next().then((age)=>{
                    const Edad = age.text()
                    cy.log(Edad)
                    cy.log("La edad de Javascript Developer es: " + Edad)
                    expect(Edad).to.equal("39")
                })
            }
        })
        
       


    })



})