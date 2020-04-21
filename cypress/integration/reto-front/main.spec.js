describe("Main title and card", function () {
  Cypress.config('pageLoadTimeOut', 10000)
  it("Titles", () => {

    cy.visit('https://front-reto-1.now.sh/')
    cy.get('.main-title').contains('Soluciones corporativas').should('be.visible')
    cy.get('.main-subtitle').contains('Lorem').should('be.visible')
   
  })
  it("Cards", () => {
    cy.get('h4').contains('Consultoría').should('be.visible')
    cy.get('h4').contains('Formación').should('be.visible')
    cy.get('h4').contains('Análisis').scrollIntoView().should('be.visible')
    cy.get('h4').contains('Investigación').scrollIntoView().should('be.visible')
  })
 
  
})