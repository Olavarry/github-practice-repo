/// <reference types="cypress" />


beforeEach(() => {
    cy.visit('https://abstracta.us/industries/ecommerce')
  })

  it('validate title', () => {
    //cy.get('h1').should('include', 'Ecommerce SoftwareDevelopment Services')
    expect(cy.get('h1')).to.contain('Ecommerce SoftwareDevelopment Services')   
  })
  