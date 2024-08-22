
describe ("Seccion 1 Validando el titulo", () =>{

    it("test validar el titulo", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'DEMOQA')
        cy.log("ok la funcion title funciona bien")


    })

    

})