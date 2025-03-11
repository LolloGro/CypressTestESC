describe('Test ESC page', () => {

  it('Test that page is up and running', () => {
    cy.visit('/');
    cy.get('h1').should('have.text', 'Hacker Escape Rooms');
  })

  it('Navigate to page The Story', () => {
    cy.visit('/');
    cy.viewport(1780, 800);
    cy.get('a').contains('The story').click();
    cy.get('.aboutUs__titel').should('have.text', 'About us');
  })

  it('Check if error messags show if date is not picked', () => {
    cy.visit('/');
    cy.get('a').contains('On-site challenges').click();
    cy.get('a').contains('Book this room').click();
    cy.get('.bookingModal__input').click();
    cy.get('.bookingModal__open').click();
    cy.get('.bookingModal_noTime').should('have.text', 'Failed to load available dates.');
  })

  it('Check that that can select filter', () => {
    cy.visit('/');
    cy.viewport(1780, 800);
    cy.get('a').contains('On-site challenges').click();
    cy.get('button').contains('Filter challenges').click();
    cy.get('.filter__tags').contains('Bash').click();
    cy.get('#online').click();
  })
})