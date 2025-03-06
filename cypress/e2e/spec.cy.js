describe('page is up and running', () => {

  it('passes', () => {
    cy.viewport(1780, 800)
    cy.visit('/')
    cy.get('a').contains('Play online').click();
  })

  it('passes', () => {
    cy.viewport(1780, 800)
    cy.visit('/')
    cy.get('a').contains('Play online').click();
    cy.get('button').contains('Filter challenges').click();
  })

})