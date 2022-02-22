/// <reference types="Cypress" />


//ASTA_TASK_3001

describe('ASTA_TASK_3001', () => {
  it('App starts correctly ', () => {
    cy.visit('https://buggy-testingcup.pgs-soft.com/task_3')
    cy.get('.nav > :nth-child(2)').should('have.text', 'Zadanie 3')
  })
})

//ASTA_TASK_3002

describe('ASTA_TASK_3002', () => {
  it('Go to editing the form', () => {
cy.get('.dropdown-toggle')
 .trigger('mouseover')
 .click()
 cy.get('#menu1').should('be.visible')



cy.get('#menu1 > :nth-child(1) > :nth-child(1)')
//  .find('li a')
//  .contains('Formularz')
 .trigger('mouseover')




// cy.get('.dropdown-menu sub-menu')
//  .find('li a')
//  .contains('Przejdź do trybu edycji')
//  .trigger('mouseover')
//  .click()
  })
})