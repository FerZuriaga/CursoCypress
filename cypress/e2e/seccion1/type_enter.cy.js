/// <reference types="cypress" />

describe("Funciones para Type", () =>
    {

    it("Type --> ENTER",() =>
    {
        cy.visit("https://www.google.com/")
        cy.title().should('eq', "Google")
        cy.wait (1500)
        cy.get("#APjFqb").type("cypress io {enter}")
        cy.get("#rso > div:nth-child(1) > div > div > div > div > div > div > div > div.yuRUbf > div > span > a > h3").click()
    })
})


    
    