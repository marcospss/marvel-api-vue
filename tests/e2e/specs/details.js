/// <reference types="Cypress" />

describe('DETAILS', () => {
  beforeEach(() => {
    cy.visit('/details/1010354')
  })

  it('You should render the details of the character', () => {
    cy.get('[data-cy=title]').should('have.text', 'Adam Warlock')
    cy.get('[data-cy=description]').should(
      'have.text',
      'Adam Warlock is an artificially created human who was born in a cocoon at a scientific complex called The Beehive.'
    )
    cy.get('[data-cy=series]').should('be.visible')
  })

  it('should be click the back home button', () => {
    cy.get('[data-cy=btn-back-home]').click()
    cy.url().should('not.include', '/details/1017100')
  })

  describe('FORM EDIT CHARACTER', () => {
    it('should be click edit character button', () => {
      cy.get('[data-cy=edit-character]').click()
      cy.get('[data-cy=form-edit-character]').should('be.visible')
      cy.get('[data-cy=title-form]').contains('Adam Warlock')
      cy.get('[data-cy=input-name]').should('have.value', 'Adam Warlock')
      cy.get('[data-cy=input-description]').should(
        'have.value',
        'Adam Warlock is an artificially created human who was born in a cocoon at a scientific complex called The Beehive.'
      )
    })

    it('should must edit a character - success', () => {
      cy.get('[data-cy=edit-character]').click()
      cy.get('[data-cy=form-edit-character]').should('be.visible')
      cy.get('[data-cy=input-name]').type('Adam Warlock - editado nome')
      cy.get('[data-cy=input-description]').type(
        'Adam Warlock - editado descrição'
      )
      cy.get('[data-cy=btn-save-edition]').click()
      cy.get('[data-cy=alert-message]').should('be.visible')
      cy.get('[data-cy=alert-message]').contains(
        'Personagem salvo com sucesso!'
      )
    })

    it('should must edit a character - error', () => {
      cy.get('[data-cy=edit-character]').click()
      cy.get('[data-cy=form-edit-character]').should('be.visible')
      cy.get('[data-cy=input-name]').type('Adam Warlock - editado nome')
      cy.get('[data-cy=input-description]').type(
        'Adam Warlock - editado descrição'
      )
      cy.get('[data-cy=btn-save-edition]').click()
      cy.get('[data-cy=btn-save-edition]').click()
      cy.get('[data-cy=alert-message]').should('be.visible')
      cy.get('[data-cy=alert-message]').contains('Personagem já está salvo!')
    })

    it('should must edit a character - error', () => {
      cy.get('[data-cy=edit-character]').click()
      cy.get('[data-cy=form-edit-character]').should('be.visible')
      cy.get('[data-cy=btn-close-form]').click()
      cy.get('[data-cy=form-edit-character]').should('not.be.visible')
    })
  })
})
