/// <reference types="cypress" />

it('adds and removes todos', () => {
  cy.request('POST', '/reset', { "todos": [{ "title": "sleep", "completed": false, "id": "4731600518"  }] })
  cy.visit('/')
  cy.get('.todo-list li').should('have.length', 0)
  cy.get('.new-todo').type('brush teeth{enter}').type('eat{enter}')
  cy.get('.todo-list li')
    .should('have.length', 3)
    .first()
    .find('.destroy')
    .click({ force: true })
  cy.get('.todo-list li')
    .should('have.length', 2)
  cy.get('.todo-list li')
    .contains('eat')
    .should('be.visible')
    cy.contains('li', 'brush teeth')
})
