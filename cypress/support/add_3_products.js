class AddThreeProducts
{

addThree()
{
cy.get('.form-control').eq(0).type('10');
cy.get('.form-control').eq(1).type('5');
cy.get('.form-control').eq(2).type('2');
}

}
export default AddThreeProducts;