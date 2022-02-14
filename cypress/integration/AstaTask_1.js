/// <reference types="Cypress" />
import AddAllProducts from '../../cypress/support/addAllProducts'
import AddThreeProducts from '../../cypress/support/add_3_products'


describe('ASTA_TASK_1001', () => {
  it('App starts correctly ', () => {
    cy.visit('https://buggy-testingcup.pgs-soft.com/task_1')
    cy.get('.nav > :nth-child(2)').should('have.text', 'Zadanie 1')
  })
})

//ASTA_TASK_1002
describe('ASTA_TASK_1002', () => {
 //ADD PRODUCT TO CARD
    it('Add one product to card', () => {
cy.get(':nth-child(1) > :nth-child(1) > .thumbnail > .caption > .input-group > .form-control')
.click()
.clear()
.type('1')

cy.get('body > :nth-child(4) > :nth-child(1)').as('productLocator')
cy.get('@productLocator').find('.thumbnail').each(($el, index, $list) => {

const productText=$el.find('.caption').text()
if(productText.includes('Okulary'))
{
$el.find('button').click()
}
})
//
cy.get('.summary-price').should('have.text', '15.54 zł')
cy.get('.summary-quantity').should('have.text', '1')
})
})



//ASTA_TASK_1003
describe('ASTA_TASK_1003', () => {
    it('Remove one product from cart', () => {
cy.get(':nth-child(1) > :nth-child(1) > .thumbnail > .caption > .input-group > .form-control')
.click()
.clear()
.type('1')

cy.get('body > :nth-child(4) > :nth-child(1)').as('productLocator')
cy.get('@productLocator').find('.thumbnail').each(($el, index, $list) => {

const productText=$el.find('.caption').text()
if(productText.includes('Okulary'))
{
$el.find('button').click()
}
})
//REMOVE PRODUCT FROM CART
cy.get('.col-md-3 > .input-group > .input-group-btn > .btn').click()
cy.get('.summary-price').should('have.text', '0.00 zł')
cy.get('.summary-quantity').should('have.text', '0')
})
})



//ASTA_TASK_1004
describe('ASTA_TASK_1004 / ASTA_TASK_1005', () => {

 //CHOOSE QUANTITY
    it('Add all products to card then remove all products',function(){

const addAllProducts = new AddAllProducts()
cy.get('.form-control')
.click({ multiple: true })
.clear()
addAllProducts.add()
//ADD
cy.get('body > :nth-child(4) > :nth-child(1)').as('productLocator')
cy.get('@productLocator').find('.thumbnail').each(($el, index, $list) => {
const productText=$el.find('.caption').text()

if(productText.includes('Cena'))
{
$el.find('button').click()
}
})
cy.get('.summary-quantity').should('have.text', '12')



//REMOVE ALL PRODUCTS
cy.get('body > :nth-child(4) > :nth-child(1)').as('removelocator')
cy.get('@removelocator').find('.panel-body').each(($el, index, $list) => {
const removeText=$el.find('.col-md-3').text()

if(removeText.includes('Usuń'))
{
$el.find('button').click()
}
})

cy.get('.summary-quantity').should('have.text', '0')
cy.get('.summary-price').should('have.text', '0.00 zł')
})
})
//IMPORTANT! REMEMBER TO VALIDATE SUMMARY OF PRICES



//ASTA_TASK_1006
describe('ASTA_TASK_1006', () => {
      it('It is impossible to add a product in an amount of zero', () => {
cy.get(':nth-child(1) > :nth-child(1) > .thumbnail > .caption > .input-group > .form-control')
.click()
.clear()
.type('0')

//ADD
cy.get('body > :nth-child(4) > :nth-child(1)').as('productLocator')
cy.get('@productLocator').find('.thumbnail').each(($el, index, $list) => {
const productText=$el.find('.caption').text()
if(productText.includes('Okulary'))
{
$el.find('button').click()
}
})
})

//CHOOSE QUANTITY
  it('Cart is epmty', () => {
cy.get('.summary-quantity').should('have.text', '0')
cy.get('.summary-price').should('have.text', '0.00 zł')
})
})



//ASTA_TASK_1007
describe('ASTA_TASK_1007', () => {
 //CHOOSE QUANTITY
    it('Select and add a products in an amount of 100', () => {
cy.get(':nth-child(1) > :nth-child(1) > .thumbnail > .caption > .input-group > .form-control')
.click()
.clear()
.type('100')

//ADD
cy.get('body > :nth-child(4) > :nth-child(1)').as('productLocator')
cy.get('@productLocator').find('.thumbnail').each(($el, index, $list) => {

const productText=$el.find('.caption').text()
if(productText.includes('Okulary'))
{
$el.find('button').click()
}
})
})
  it('Price and quantity check', () => {
cy.get('.summary-quantity').should('have.text', '100')
cy.get('.summary-price').should('have.text', '1554.00 zł')
})
})





//ASTA_TASK_1008
describe('ASTA_TASK_1008',function() {
//CHOOSE QUANTITY
    it('It is impossible to add more than 100 products', () => {
cy.get('#main-reset').click()
cy.get(':nth-child(1) > :nth-child(1) > .thumbnail > .caption > .input-group > .form-control')
.click()
.clear()
.type('200')

//ADD PRODUCTS
cy.get('body > :nth-child(4) > :nth-child(1)').as('productLocator')
cy.get('@productLocator').find('.thumbnail').each(($el, index, $list) => {

const productText=$el.find('.caption').text()
if(productText.includes('Okulary'))
{
$el.find('button').click()
}
})

//ALERT VALIDATION
cy.on('window:alert',(str)=>
{
expect(str).to.equal('Łączna ilość produktów w koszyku nie może przekroczyć 100.')
})
 })
  })


//ASTA_TASK_1009
  describe('ASTA_TASK_1009',function() {

//CHOOSE QUANTITY
    it('Add product', () => {
cy.get(':nth-child(1) > :nth-child(1) > .thumbnail > .caption > .input-group > .form-control')
.click()
.clear()
.type('12')


//ADD PRODUCTS
cy.get('body > :nth-child(4) > :nth-child(1)').as('productLocator')
cy.get('@productLocator').find('.thumbnail').each(($el, index, $list) => {

const productText=$el.find('.caption').text()
if(productText.includes('Aparat'))
{
$el.find('button').click()
}
})

//DATA RESET
})
it('Data reset', () => {
    cy.get('#main-reset').click()
    cy.get('.summary-quantity').should('have.text', '0')
    cy.get('.summary-price').should('have.text', '0.00 zł')
})
 })


 //ASTA_TASK_1010


//VISIT APP
describe('ASTA_TASK_1010', () => {
  it('App starts correctly ', () => {
    cy.visit('https://buggy-testingcup.pgs-soft.com/task_1')
    cy.get('.nav > :nth-child(2)').should('have.text', 'Zadanie 1')
  })

//CHOOSE QUANTITY
    it('Add three products', () => {

const addThreeProducts = new AddThreeProducts()
cy.get('.form-control')
.click({ multiple: true })
.clear()
addThreeProducts.addThree()

//ADD
cy.get('body > :nth-child(4) > :nth-child(1)').as('productLocator')
cy.get('@productLocator').find('.thumbnail').each(($el, index, $list) => {

const productText=$el.find('.caption').text()
if(productText.includes('Cena'))
{
$el.find('button').click()
}
})
})
//CART VALIDATION
  it('Cart validation', () => {
cy.get(':nth-child(1) > .col-md-9 > .row-in-basket-quantity').should('have.text', '10')
cy.get(':nth-child(2) > .col-md-9 > .row-in-basket-quantity').should('have.text', '5')
cy.get(':nth-child(3) > .col-md-9 > .row-in-basket-quantity').should('have.text', '2')
cy.get('.summary-quantity').should('have.text', '17')
  })

})
//IMPORTANT! REMEMBER TO VALIDATE SUMMARY OF PRICES




//ASTA_TASK_1011
describe('ASTA_TASK_1011',function() {
//GO TO NEXT TASK
it('Go to next task', () => {
cy.get(':nth-child(3) > a > img').click()
})

it('URL Validate', () => {
cy.url().should('include', 'https://buggy-testingcup.pgs-soft.com/task_2')
})
 })

 //Dominik Calak
