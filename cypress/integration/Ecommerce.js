/// <reference types="cypress" />


beforeEach(() => {
    cy.visit('https://abstracta.us/industries/ecommerce')
  })

  it('validate title', () => {
    cy.get('h1').should('have.text', 'Ecommerce SoftwareDevelopment Services')
      
  })
  