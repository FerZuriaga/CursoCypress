class ProyectoUno_PO{
    visitHome(){
        let tiempo = 1000
        before(()=>{  
            cy.visit('url')
            cy.title().should('eq','titulo')
            cy.wait(tiempo)
        })
    }

    SeccionUno(name,last_name,email,t){
        let tiempo = t
        cy.xpath("//input[contains(@name,'first_name')]").clear().should("be.visible").type(name)
        cy.wait(tiempo)
        cy.xpath("//input[contains(@name,'lastname_name')]").clear().should("be.visible").type(last_name)
        cy.wait(tiempo)
        cy.xpath("//input[contains(@name, 'email')]").clear().should("be.visible").type(email)

    }
    SeccionDos(tel,dir1,ciudad,estado,t){
        let tiempo = t
        cy.xpath("//input[contains(@name, 'phone')]").clear().should("be.visible").type(tel)
        cy.wait(tiempo)
        cy.xpath("//input[contains(@name, 'address')]").clear().should("be.visible").type(dir1)
        cy.wait(tiempo)
        cy.xpath("//input[contains(@name, 'city')]").clear().should("be.visible").type(ciudad)
        cy.wait(tiempo)
        cy.xpath("//select[contains(@name,'state')]").select(estado, {force:true})
    }

    SeccionTres(cp,web,proyecto,t){
        let tiempo = t
        ccy.xpath("//input[contains(@name,'zip'])").clear().should('be.visible').type(cp)
        cy.wait(tiempo)
        cy.xpath('[....website]').clear().should('be.visible').type(web)
        cy.wait(tiempo)
        cy.xpath("..valor yes").should('be.visible').check().should("be.checked")
        cy.wait(tiempo)
        cy.xpath('esto es el form.control').clear().should('be.visible').type(proyecto)
        cy.wait(tiempo)
        
        cy.xpath("..click").should("be.visible").click({force:true})
    }



}//Final

export default ProyectoUno_PO;