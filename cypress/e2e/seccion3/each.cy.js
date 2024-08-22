/// <reference types="cypress" />
require('cypress-xpath')
require('cypress-plugin-tab')

describe("Bucles For y Each", () =>{

    it("For uno",() =>{

        for (let i=1; i<=10; i++){
            cy.log("Numero: " + i)
        }

    })

    it("For uno",() =>{

        for (let i=1; i<=10; i++){
            let t=5
            cy.log(t + " x " + i + "=" + t*i)
        }

    })

    it("Each uno",() =>{  //en este ejemplo agarro los productos y solo mequedo con los que son numero par, y tienen los nombres tanto..
        cy.visit("https://www.automationexercise.com/")
        cy.title().should("eq", "Automation Exercise")

        //  cy.get(".product-image-wrapper").each(({$el,index,$list})=>{  //en este ejercicio copio lo del profe, pero mi pagina tengo que hacerlo de otra manera.. como lo comentado abajo, por que tengo diferentes selectores y cosas dif
            
        //     //cy.log(index)
        //     cy.log($el.text())
        //     //cy.log($list)
        //     let vestido = $el.text()
        //     if(vestido.include("Blue Top")){
        //         cy.wrap($el).click()                   //wrap agarra los elementos como tal del arreglo que recorremos, y como estamos dentro de la funcion each podemos escoger un elemento (por que los recorremos y en el que encuentres este elemento dale click)
        //     }


        // }) 
        /* cy.get(".overlay-content").first().children().eq(1).then((elementoP)=>{
            cy.log(elementoP.text())
            


        }) */
        let nombreProductos = []

        cy.get("div.overlay-content > p").each((elemento,indice,lista) => {   //aca recorro todos los elementos de mi arrelgo.
            //cy.log(elemento.text())  
            if(indice % 2 == 0){
                console.log(indice)
                nombreProductos.push(elemento.text()) //dentro de mi arreglo, agrega el texto del elemento nuevo
            }
                
        
            // if(elemento.text().includes("Blue Top")){
                
            //    cy.wrap(elemento).next().click({force:true})
            // }
                
        }).then(() =>{
            for(let x= 0; x<nombreProductos.length; x++){
                console.log(nombreProductos[x]) //aca obtengo el elemento dentro de mi arreglo
            }

        }) 

        cy.log(nombreProductos)
        cy.wrap(nombreProductos).each((texto) =>{
            cy.log(texto)
        })
        

    })
    it("Each ",() =>{
        cy.visit("https://www.automationexercise.com/")
        cy.title().should("eq", "Automation Exercise")

        
        cy.get("div.overlay-content > p").each((elemento,indice,lista) => {
            
        })


        let producto = "/product_details/"

        for(let x =1; x<=3; x++){
            cy.get(`[href= '${producto + x}']`).click()
            cy.get("#quantity").clear().type("3")
            cy.get(':nth-child(5) > .btn').click()
            cy.wait(1500)
            cy.xpath("//button[@class='btn btn-success close-modal btn-block'][contains(.,'Continue Shopping')]").click()
            cy.wait(2000)
            //cy.get(".btn-default").click()

            //cy.get("[href=" + "'" + producto + x + "'" + "]").click() esta es una maneramas larga de hacerlo.. con lo de arriba simplifico
            cy.get('.shop-menu > .nav > :nth-child(1) > a').click()
            
            //cy.get(".nav.nav-pills.nav-justified").eq(x).click({force:true})


        /*  cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
            cy.get('#quantity').clear().type("4")
            cy.get(':nth-child(5) > .btn').click()
            cy.xpath("//button[@class='btn btn-success close-modal btn-block'][contains(.,'Continue Shopping')]").click()
            cy.get('.shop-menu > .nav > :nth-child(1) > a').click() */

        }


        //para sumar los elementos
    
    })
    it.only("Each2 ",() =>{ //en este ejemplo estoy recorriendo todos los elementos ,osea entro en cada uno, les pongo cuantos productos , los agrego al carro y vuelvo a la pagina
        cy.visit("https://www.automationexercise.com/")
        cy.title().should("eq", "Automation Exercise")

        const datos= []
        cy.get("div.overlay-content > p").each((elemento,indice,lista) => {
            datos[indice] = elemento.text()   //en esa posicion d mi arreglo le estoy guardando el texto del elemento 
        }).then(() => {

            let producto = "/product_details/"

        for(let x =1; x<=datos.length; x++){
            if(x == 9 || x == 10){
                cy.log("continue")
                continue
            }
            cy.get(`[href= '${producto + x}']`).click()
            cy.get("#quantity").clear().type("3")
            cy.get(':nth-child(5) > .btn').click()
            cy.wait(1500)
            cy.xpath("//button[@class='btn btn-success close-modal btn-block'][contains(.,'Continue Shopping')]").click()
            cy.wait(2000)
            //cy.get(".btn-default").click()

            //cy.get("[href=" + "'" + producto + x + "'" + "]").click() esta es una maneramas larga de hacerlo.. con lo de arriba simplifico
            cy.get('.shop-menu > .nav > :nth-child(1) > a').click()
            
            //cy.get(".nav.nav-pills.nav-justified").eq(x).click({force:true})


      
        }

        })


        


        //para sumar los elementos
    

    })

})