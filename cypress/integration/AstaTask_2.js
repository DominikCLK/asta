/// <reference types="Cypress" />
import AddAllProducts from '../../cypress/support/addAllProducts'
import AddThreeProducts from '../../cypress/support/add_3_products'

//ASTA_TASK_2001

describe('ASTA_TASK_2001', () => {
  it('App starts correctly ', () => {
    cy.visit('https://buggy-testingcup.pgs-soft.com/task_2')
    cy.get('.nav > :nth-child(2)').should('have.text', 'Zadanie 2')
  })
})

//ASTA_TASK_2002

describe('ASTA_TASK_2002', () => {
it('shows a list of categories and choose one', () => {

cy.get('.select2-selection__arrow').click()

})
})


//ASTA_TASK_2003

describe('ASTA_TASK_2003', () => {
it('choose Sport category', () => {


cy.get('.select2-results__options')
 .find('li')
 .contains('Sport')
 .click()
cy.get(':nth-child(1) > .thumbnail > .caption > h4').should('have.text', 'Piłka')
})
})



//ASTA_TASK_2004

describe('ASTA_TASK_2004', () => {
it('choose Elektronika category', () => {
cy.get('.select2-selection__arrow').click()

cy.get('.select2-results__options')
 .find('li')
 .contains('Elektronika')
 .click()
 cy.get(':nth-child(1) > .thumbnail > .caption > h4').should('have.text', 'Aparat')
})
})


//ASTA_TASK_2005

describe('ASTA_TASK_2005', () => {
it('choose Firma i usługi category', () => {
cy.get('.select2-selection__arrow').click()

cy.get('.select2-results__options')
 .find('li')
 .contains('Firma i usługi')
 .click()
 cy.get(':nth-child(1) > .thumbnail > .caption > h4').should('have.text', 'Biuro XYZ')
})
})


//ASTA_TASK_2006

describe('ASTA_TASK_2006', () => {
it('Reset web and choose Firma i usługi category', () => {
cy.get('#main-reset')
.click()

cy.get('.select2-selection__arrow').click()

cy.get('.select2-results__options')
 .find('li')
 .contains('Firma i usługi')
 .click()
 cy.get(':nth-child(1) > .thumbnail > .caption > h4').should('have.text', 'Biuro XYZ')


})
})



//ASTA_TASK_2007

describe('ASTA_TASK_2007', () => {
it('The search includes a hint system after entering the full product name.', () => {
cy.get('.select2-selection__arrow')
 .click()

 cy.get('.select2-dropdown')
 .find('span input')
 .click()
 .type("Aparat")

cy.get('.select2-results')
.find('ul li')
.should('have.text', 'Aparat')

})
})




//ASTA_TASK_2008

describe('ASTA_TASK_2008', () => {
it('After entering a few characters of the product name, the product prompt with the given name is displayed.', () => {

 cy.get('.select2-dropdown')
 .find('span input')
 .click()
 .clear()
 .type("Mon")
 .should('have.text', 'Monitor')

})
})


//ASTA_TASK_2009/2010


describe('ASTA_TASK_2009/2010', () => {
it('The search includes a hint system after entering the full name of the category', () => {


  //Sport
 cy.get('.select2-dropdown')
 .find('span input')
 .click()
 .clear()
 .type("Sport")

cy.get('.select2-results')
.find('ul li')
.should('have.text', 'Sport')


//Elektronika
 cy.get('.select2-dropdown')
 .find('span input')
 .click()
 .clear()
 .type("Ele")

 cy.get('.select2-results')
.find('ul li')
.should('have.text', 'Elektronika')


//Firma
cy.get('.select2-dropdown')
 .find('span input')
 .click()
 .clear()
 .type("Firma")

 cy.get('.select2-results')
.find('ul li')
.should('have.text', 'Firma i usługi')


})
})


//ASTA_TASK_2011

describe('ASTA_TASK_2011', () => {
it('Search accepts Polish characters', () => {


  //Sport
 cy.get('.select2-dropdown')
 .find('span input')
 .click()
 .clear()
 .type("Piłka")

cy.get('.select2-results')
.find('ul li')
.should('have.text', 'Piłka')


cy.get('.select2-selection__arrow')
 .click()

})
})


describe('ASTA_TASK_2012', () => {

it('Go to next task', () => {

  cy.get(':nth-child(3) > a > img')
  .click()
})

it('URL Validate', () => {
cy.url().should('include', 'https://buggy-testingcup.pgs-soft.com/task_3')
})
 })



