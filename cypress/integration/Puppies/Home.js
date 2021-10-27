/// <reference types="cypress" />


  beforeEach(() => {
    cy.visit('http://puppies.herokuapp.com/')
  })

  it('validate title contains text', () => {
    cy.get('.intro_t > h1').should('have.text', 'Home of the Happy Puppy')
      
  })
  
  it('validate title does not contain text', () => {
    cy.get('.intro_t > h1').should('not.have.text', 'Test')
      
  })
