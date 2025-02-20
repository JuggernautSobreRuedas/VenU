/// <reference types="cypress" />

describe('Pruebas de login', () => {
    it("Login correcto", () => {
        cy.visit(Cypress.env("produccion"))
        cy.get('[href="/login/"]').click()
    })
})