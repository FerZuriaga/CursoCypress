import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"


Given('Abrir el Navegador principal',() =>{
    cy.visit("https://demoqa.com/text-box")
})


 When('Cargando el nombre {word}', (Name) =>{
    cy.get('#userName').should('be.visible').type(Name)
    cy.wait(1000)

})