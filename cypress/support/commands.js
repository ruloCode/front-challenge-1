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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("Header", () => {
  cy.visit('https://front-reto-1.now.sh/')
  cy.get('.Header-logo').contains('Empresa').should('be.visible')
  cy.get('.header-item').contains('Inicio').should('be.visible')
  cy.get('.header-item').contains('Acerca').should('be.visible')
  cy.get('.header-item').contains('Servicios').should('be.visible')
  cy.get('.header-item').contains('Productos').should('be.visible')
  cy.get('.header-item').contains('Contacto').should('be.visible')
})