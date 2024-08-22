/// <reference types="cypress" />

require('cypress-xpath')
require('cypress-plugin-tab')

describe("Reto select (solo lo hago por ver, no tengo pagina", () =>{

    it("Assert contains",()=>{


        cy.visit("https://www.automationexercise.com/")
        cy.title().should("eq","Automation Exercise")
        cy.wait(1000)

        cy.get("#accordian").should("be.visible").contains("Women").click()


    })

    it("Assert Find_eq",()=>{


        cy.visit("https://www.automationexercise.com/")
        cy.title().should("eq","Automation Exercise")
        cy.wait(1000)

        cy.get(".product-image-wrapper").eq(1).find(".overlay-content").contains("men tshirt", {matchCase: false})


    })

    it.only("Assert Find_eq, validando vestido",()=>{


        cy.visit("https://www.automationexercise.com/")
        cy.title().should("eq","Automation Exercise")
        /*
        cy.wait(1000)

        cy.get(".product-image-wrapper").eq(1).find(".overlay-content").contains("men tshirt", {matchCase: false})
        */
        cy.get("[href='/product_details/2']").click()


        cy.get(".product-information").should("be.visible").contains("New")

        cy.get(".product-information").then((div)=>{
           
           cy.log(div.text().includes("New"))

        })

        //ejemplo de la pagina que no anda 
        /*
        cy.get('#our_price_display').then((e)=>{
            cy.go(e.text())
            let precio=e.text()
            precio=precio.slice(1,5) //el slice usas para sacar un string (desde la posicion 1 queres que empieze a contar, hasta el 5)
            cy.log(precio)

            if(precio > 30){
                cy.log("El vestido sale de nuestro presupuesto")
            
            }else{
                cy.log("El vestido esta en nuestro presupuesto")
                cy.get("#add_to_cart").click()
            }
        })
            */
           cy.get(".product-information").children().eq(4).contains("400")
    })

    it("Assert contain.text y have.text",() =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "DEMOQA")
        cy.wait(1000)

        cy.get("#userName").should("be.visible").type("paola")
        cy.get("#userEmail").should("be.visible").type("paola@hotmail.com")
        cy.get('#submit').click()
        
            cy.get("#name").should("have.text","Name:paola")  //aca le digo que tenga el texto rodrigo (tiene que tener todo el have text)
            cy.get("#name").should("contain.text","paola")  //el contain tiene que tener nomas el texto
        

    })

    it("Assert have.text mas then",() =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "DEMOQA")
        cy.wait(1000)

        cy.get("#userName").should("be.visible").type("paola")

        cy.get("#userName").should("contain.value", "paola").then(()=>{               
            cy.get("#userEmail").should("be.visible").type("paola@hotmail.com")
            cy.get('#submit').click()

        })

    })
    

    it("Assert have.class y la funcion and",() =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "DEMOQA")
        cy.wait(1000)

        cy.get("#userName").should("be.visible").and("have.class", "mr-sm-2").then(()=>{ //con el AND se tienen que comprobar las 2 condiciones

            cy.get("#userName").type("paola")
        })
    })

    it("Assert have.class",() =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "DEMOQA")
        cy.wait(1000)

        cy.get("#userName").should("be.visible").should("have.class", "mr-sm-2").then(()=>{ 

            cy.get("#userName").type("paola")
        })
    })

    it.only("Assert have.class",() =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "DEMOQA")
        cy.wait(1000)

        cy.get("#userName").should("be.visible").and("not.have.class", "mr-sm-22").then(()=>{  // como la clase 22 no existe, SI PASA la prueba.. pero si pongo la 2 no pasa..por que si existe 

            cy.get("#userName").type("paola")
        })

    })

    it("Assert length y el css",() =>{ //esto lo copie por que no tengo pagina para probar eso (en el momento )
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "DEMOQA")
        cy.wait(1000)

        cy.get("#myTable >tr > td").should("have.length", 91).and("have.css", "padding", "8px")
        
    })



    /*
    it.only("contains",() =>{ //esto lo copie por que no tengo pagina para probar eso (en el momento )
        let tiempo = 1500
        cy.visit("...")
        cy.wait(tiempo)

        //eliminando ventana
        cy.get(".at-cm-no-button").should("be.visible").click({force:true})  //aca cerras la "publicidad" que te aparece.. forzas a que se cierre para dsp navegar tranquilo
        cy.get(".form-group > #user-mesagge").should("be.visible").type("Demo del contenido")
       cy.contains("[type=button]","Show Message").should("be.visible").click({force:true}) //el contains lo usas para validar si hay muchos elementos iguales y solo le pasas el valor que tiene 
    })
       */

    it.only("contains",() =>{ //esto lo copie por que no tengo pagina para probar eso (en el momento ) //RETO ASSErt
        let tiempo = 1500
        cy.visit("...")
        cy.wait(tiempo)

        //eliminando ventana
        cy.get(".at-cm-no-button").should("be.visible").click({force:true})

        let a =35
        let b =20

        cy.get("#sum1").should("be.visible").and("have.clas", "form-control").type(a)
        cy.get("#sum2").should("be.visible").and("have.clas", "form-control").type(b)
        cy.contains("[type='button']","Get Total").click()  //aca puedo usar el contain por que no tiene un id, entonces metemos el contain y nos sirve

        cy.get("#displayvalue").should("be.visible").then((e)=>{
            let r=a+b
            cy.log("El valor de r: " + r )
            cy.log(e.text())
            let res =e.text()

            if(r==rest){
                cy.log("Son iguales")
            }else{
                cy.log("El resultado es incorrecto")
            }

            if(res > 50 ){
                a= a-10
                b= b-10

                cy.get("#sum1").invoke("attr","placeholder").should("contain","Enter Value").then(()=>{
                    cy.get("#sum1").clear().type(a)
                    cy.get("#sum1").invoke("attr","style","color:blue")
                })
                //cy.get("#sum1").should("be.visible").and("have.clas", "form-control").clear().type(a)
                cy.wait(tiempo)
                cy.get("#sum2").should("be.visible").and("have.clas", "form-control").clear().type(b)
                cy.wait(tiempo)
                cy.get("#sum2").invoke("attr","style","color:blue")
                cy.contains("[type='button']","Get Total").click()

                cy.get("#displayvalue").should("be.visible").then((e)=>{
                    cy.get("#displayvalue").invoke("attr", "style", "color:red")
                })

                
            }else{
                a= a +5
                b= b +5
                cy.get("#sum1").should("be.visible").and("have.clas", "form-control").clear().type(a)
                cy.wait(tiempo)
                cy.get("#sum2").should("be.visible").and("have.clas", "form-control").clear().type(b)
                cy.wait(tiempo)
                cy.contains("[type='button']","Get Total").click()

            }

            //el assert invotk sirve para conocer los atributos de alguna funcion

        })


    })


           
   
})