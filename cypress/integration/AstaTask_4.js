/// <reference types="Cypress" />


//ASTA_TASK_4001

describe('ASTA_TASK_4001', () => {
  it('App starts correctly ', () => {
    cy.visit('https://buggy-testingcup.pgs-soft.com/task_4')
    cy.get('.nav > :nth-child(2)').should('have.text', 'Zadanie 4')
  })
})

//ASTA_TASK_4002

describe('ASTA_TASK_4002', () => {
it('Open form and fill inputs', () => {
cy.get('.btn').click()
})
})