

class AddAllProducts
{

add()
{
cy.get('.form-control').eq(0).type('1');
cy.get('.form-control').eq(1).type('1');
cy.get('.form-control').eq(2).type('1');
cy.get('.form-control').eq(3).type('1');
cy.get('.form-control').eq(4).type('1');
cy.get('.form-control').eq(5).type('1');
cy.get('.form-control').eq(6).type('1');
cy.get('.form-control').eq(7).type('1');
cy.get('.form-control').eq(8).type('1');
cy.get('.form-control').eq(9).type('1');
cy.get('.form-control').eq(10).type('1');
cy.get('.form-control').eq(11).type('1');
}

}
export default AddAllProducts;