describe("Footer targets", function () {
  Cypress.config('pageLoadTimeOut', 20000)

  it("Foooter", () => {
    cy.visit('https://front-reto-1.now.sh/')

    cy.get('.footer-target.welcome').scrollIntoView().should('be.visible')
    cy.get('.footer-target.services').scrollIntoView().should('be.visible')
    cy.get('.footer-target.news').scrollIntoView().should('be.visible')
    cy.get('.footer-item').contains('Leer más').scrollIntoView().should('be.visible').click()
 
  })
 
  
})