/// <reference types="Cypress" />


//ASTA_TASK_3001

describe('ASTA_TASK_3001', () => {
  it('App starts correctly ', () => {
    cy.visit('https://buggy-testingcup.pgs-soft.com/task_3')
    cy.get('.nav > :nth-child(2)').should('have.text', 'Zadanie 3')
  })
})



