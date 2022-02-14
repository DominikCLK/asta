/// <reference types="Cypress" />
import AddAllProducts from '../../cypress/support/addAllProducts'
import AddThreeProducts from '../../cypress/support/add_3_products'


describe('ASTA_TASK_2001', () => {
  it('App starts correctly ', () => {
    cy.visit('https://buggy-testingcup.pgs-soft.com/task_2')
    cy.get('.nav > :nth-child(2)').should('have.text', 'Zadanie 2')
  })
})

//ASTA_TASK_2002

describe('ASTA_TASK_2002', () => {
it('shows a list of categories', () => {
cy.get('.select2-selection__arrow').click()




})
})

