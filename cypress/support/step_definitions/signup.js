import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('the user is on the signup page', () => {
  cy.visit('/');
});

When('the user enters a valid email and password', () => {
  cy.get('input[type=email]').type('newuser@example.com');
  cy.get('input[type=password]').type('password123');
});

When('the user clicks on the signup button', () => {
  cy.get('button[type=submit]').click();
});

Then('the user should see a success message', () => {
  cy.get('p').should('have.css', 'color', 'rgb(0, 128, 0)').contains('Signup successful!');
});
