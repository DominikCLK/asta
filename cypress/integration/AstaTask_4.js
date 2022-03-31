/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'



//ASTA_TASK_4001
describe('ASTA_TASK_4001', () => {
  it('App starts correctly ', () => {
    cy.visit('https://buggy-testingcup.pgs-soft.com/task_4')
    cy.get('.nav > :nth-child(2)').should('have.text', 'Zadanie 4')
  })
})



//ASTA_TASK_4002

describe('ASTA_TASK_4002', function() {

before(function() {
cy.fixture('example').then(function(data) {
this.data = data
 })
})

//ASTA_TASK_4003

it('Open form and fill correcrt credentials', function() {
cy.visit('https://buggy-testingcup.pgs-soft.com/task_4_frame')

cy.get(':nth-child(1) > .col-md-8 > #name').type(this.data.name)
cy.get(':nth-child(2) > .col-md-8 > #name').type(this.data.surname)
cy.get(':nth-child(3) > .col-md-8 > #name').type(this.data.phone)

cy.get('#save-btn').click()

cy.get(':nth-child(1) > .col-md-8 > #name').type(this.data.validationName)
cy.get(':nth-child(2) > .col-md-8 > #name').type(this.data.validationSurname)
cy.get(':nth-child(3) > .col-md-8 > #name').type(this.data.validationPhone)

cy.get('#save-btn').click()

  })
})