/// <reference types="Cypress" />

describe("Buttons", function () {
  Cypress.config('pageLoadTimeOut', 10000)
  it("botones", function () {
    cy.visit('https://front-reto-1.now.sh/')
    cy.get('.logo').click()
  })
})