import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('the user is on the signup page', () => {
  cy.visit('/'); 
});

When('the user clicks on the login link', () => {
  cy.get('a[href="/login"]').click();
});

Then('the user should be taken to the login page', () => {
  cy.url().should('include', '/login');
});
