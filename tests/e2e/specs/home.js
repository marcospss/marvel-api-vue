/// <reference types="Cypress" />

describe('HOME', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('load list characters', () => {
    cy.get('.grid').should('be.visible')
  })

  it('filter character from the list', () => {
    cy.get('input[type="search"]').type('Abomination (Emil Blonsky)')
    cy.get('.grid').should('be.visible')
    cy.get('figure').should('have.length', 1)
  })
})
