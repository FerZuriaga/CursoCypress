// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Texto_visible', (selector,texto,t) => { //aca ponemos los parametro que vamos a usa
    cy.get(selector).should('be.visible').type(texto)  //en el get ponemos el parametro, por que ese varia siempre
    let tiempo = t
    cy.wait(tiempo)

 })

 Cypress.Commands.add('Texto_visible_xpath', (selector,texto,t) => { //aca ponemos los parametro que vamos a usa
    cy.xpath(selector).should('be.visible').type(texto)  //en el get ponemos el parametro, por que ese varia siempre
    let tiempo = t
    cy.wait(tiempo)

 })

 Cypress.Commands.add("Click", (selector,t) => { //aca ponemos los parametro que vamos a usa
    cy.get(selector).should('be.visible').click()  //en el get ponemos el parametro, por que ese varia siempre
    let tiempo = t
    cy.wait(tiempo)

 })

 Cypress.Commands.add("Click_force", (selector,t) => { //aca ponemos los parametro que vamos a usa
    cy.get(selector).should('be.visible').click({force:true})  //en el get ponemos el parametro, por que ese varia siempre
    let tiempo = t
    cy.wait(tiempo)

 })

 Cypress.Commands.add("Click_force_xpath", (selector,t) => { //aca ponemos los parametro que vamos a usa
    cy.xpath(selector).should('be.visible').click({force:true})  //en el get ponemos el parametro, por que ese varia siempre
    let tiempo = t
    cy.wait(tiempo)

 })

 Cypress.Commands.add("Validar_Campo", (selector,men,nombre_campo) => { //aca ponemos los parametro que vamos a usa
   cy.xpath(selector).should("be.visible").then((val) =>{
      let dato= val.text()
      cy.log(dato)
      let mensaje = men
      expect(dato).to.equal(mensaje)

      if(dato == mensaje){
          cy.log("#########################")
          cy.log("El " + nombre_campo + "no es valido")
          cy.log("#########################")
      }
  })
})

Cypress.Commands.add("Validar_campo2", (selector,men,nombre_campo,t) => { //aca ponemos los parametro que vamos a usa
      cy.xpath(selector).should("be.visible").should("contain",men).then((val)=>{ //men es mensaje
         cy.log("########################")
         cy.log("El " + nombre_campo + "no es valido")
         cy.log("#######################")
      })

   })

 


 

 //Funciones por conjunto o completas
 //creando la funcion DEMOQA
 Cypress.Commands.add('bloque_DEMOQA', (name,email,dir1,dir2,t) => { 
    let tiempo = t
    cy.get("#userName").should('be.visible').type(name)
    cy.wait(tiempo)
    cy.get("#userEmail").should('be.visible').type(email)
    cy.wait(tiempo)
    cy.get("#currentAddress").should('be.visible').type(dir1)
    cy.wait(tiempo)
    cy.get(".col-md-9 > #permanentAddress").should('be.visible').type(dir2)
    cy.get("#submit").should('be.visible').click({force:true})
    cy.wait(tiempo)

 })


 Cypress.Commands.add('bloque_DEMOQA_Dos', (name,email,dir1,dir2,t) => { 
    let tiempo = t
    cy.Texto_visible("#userName",name,500)
     
     cy.Texto_visible("#userEmail",email,200)
     cy.Texto_visible_xpath("//textarea[contains(@id,'currentAddress')]",dir1,100)
     cy.Texto_visible_xpath("//textarea[contains(@id,'permanentAddress')]",dir2,100)
     cy.Click_force_xpath("//button[contains(@id,'submit')]",500)

 })

 Cypress.Commands.add('Bloque_reto_From', (name,last_name,email,tel,dir1,ciudad,estado,cp,web,proyecto,t) => { 
      let tiempo = t
      cy.xpath("//input[contains(@name,'first_name')]").clear().should("be.visible").type(name)
      cy.wait(tiempo)
      cy.xpath("//input[contains(@name,'lastname_name')]").clear().should("be.visible").type(last_name)
      cy.wait(tiempo)
      cy.xpath("//input[contains(@name, 'email')]").clear().should("be.visible").type(email)
      cy.wait(tiempo)
      cy.xpath("//input[contains(@name, 'phone')]").clear().should("be.visible").type(tel)
      cy.wait(tiempo)
      cy.xpath("//input[contains(@name, 'address')]").clear().should("be.visible").type(dir1)
      cy.wait(tiempo)
      cy.xpath("//input[contains(@name, 'city')]").clear().should("be.visible").type(ciudad)
      cy.wait(tiempo)

      cy.xpath("//select[contains(@name,'state')]").select(estado, {force:true})

      cy.xpath("//input[contains(@name,'zip'])").clear().should('be.visible').type(cp)
      cy.wait(tiempo)
      cy.xpath('[....website]').clear().should('be.visible').type(web)
      cy.wait(tiempo)
      cy.xpath("..valor yes").should('be.visible').check().should("be.checked")
      cy.wait(tiempo)
      cy.xpath('esto es el form.control').clear().should('be.visible').type(proyecto)
      cy.wait(tiempo)
      
      cy.xpath("..click").should("be.visible").click({force:true})
      
     
  

     



})