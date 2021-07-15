/// <reference types="cypress" />


  beforeEach(() => {
    cy.visit('http://puppies.herokuapp.com/')
  })

  it('validate title', () => {
    cy.get('.intro_t > h1').should('have.text', 'Home of the Happy Puppy')
      
  })
  
  it('validate title', () => {
    cy.get('.intro_t > h1').should('not.have.text', 'Test')
      
  })