/// <reference types='cypress' />

require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe('Reto de la funcion Hooks', () =>{ 
    let tiempo = 2000
    beforeEach(()=>{  
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM')
        cy.wait(tiempo)

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("admin123")
        cy.get('.oxd-button').click()

     })

     afterEach(()=>{
         cy.log(" ############## Ultimo ciclo.. final de todo ########")

        
        cy.get(".oxd-userdropdown-name").should("be.visible").click()
         //cy.get("[href='/web/index.php/auth/logout']").should("be.visible").click()
         cy.get(".oxd-dropdown-menu li").contains("Logout").click()
        //cy.wait(tiempo)

       //cy.xpath("//a[@href='/web/index.php/auth/logout'][contains(.,'Logout')]").click({force:true})
    //     cy.wait(tiempo)

     })
    it('test uno',() => {
        
      cy.xpath("//a[@href='/web/index.php/admin/viewAdminModule']").should("be.visible").click()
      cy.wait(tiempo)

    
    })

    it('test dos',() => {
        
        cy.xpath("//a[@href='/web/index.php/leave/viewLeaveModule']").should("be.visible").click({force:true})
       //cy.get("[href='/web/index.php/leave/viewLeaveModule']").click()
       cy.wait(tiempo)

      
     })

    it('test tres',() => {
        
        
        cy.xpath("//a[@href='/web/index.php/performance/viewPerformanceModule']").click({force:true})
        cy.wait(tiempo)

   
       
     })
})