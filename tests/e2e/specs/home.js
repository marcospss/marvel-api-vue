/// <reference types="Cypress" />

describe('HOME', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('load list characters', () => {
    cy.get('[data-cy=grid-characters]').should('be.visible')
  })

  it('should be click on the first character in the list and redirect for page details', () => {
    cy.get('[data-cy=grid-characters]')
      .children()
      .eq(1)
      .click()
    cy.url().should('include', '/details/1017100')
  })

  it('filter character from the list', () => {
    cy.get('[data-cy=input-search]').type('Abomination (Emil Blonsky)')
    cy.get('[data-cy=grid-characters]')
      .children()
      .should('have.length', 1)
  })

  it('should be click the load more button', () => {
    cy.get('[data-cy=btn-load-more]').click()
    cy.get('[data-cy=grid-characters]')
      .children()
      .should('have.length', 20)
  })
})
