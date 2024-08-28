///  <reference types='cypress' />

 describe('Prueba en modo móvil', () => {
    it('Debería cargar correctamente en un iPhone 6', () => {
      cy.viewport('iphone-6')
      cy.visit('google.com')
  
      cy.get('.menu-mobile').should('be.visible')
    })
  })