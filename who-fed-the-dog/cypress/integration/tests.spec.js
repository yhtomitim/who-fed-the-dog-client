/// <reference types="Cypress" />

describe('Who Fed the Dog?! app', () => {
  it('visits the site', () => {
    cy.visit('localhost:8081');
  });
  it('will click on users nav button', () => {
    cy.get('[href="#/users"] > .btn__content').click()
  });
  it('will click on pets nav button', () => {
    cy.get('[href="#/pets"] > .btn__content').click()
  });
  it('will click on fed log nav button', () => {
    cy.get('[href="#/log"] > .btn__content').click()
  });
  it('will click on app stats nav button', () => {
    cy.get('[href="#/chart"] > .btn__content').click()
  });
  it('will click on Home nav button', () => {
    cy.get('[href="#/"] > .btn__content').click()
  });
});