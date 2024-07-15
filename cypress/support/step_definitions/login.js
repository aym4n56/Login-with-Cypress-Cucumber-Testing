import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('the user is on the login page', () => {
  cy.visit('/login');
});

When('the user enters a valid email and password', () => {
  cy.get('input[type=email]').type('testuser@example.com');
  cy.get('input[type=password]').type('password123');
});

When('the user clicks on the login button', () => {
  cy.get('button[type=submit]').click();
});

Then('the user should see a success message', () => {
  cy.on('window:alert', (str) => {
    expect(str).to.equal('Login successful');
  });
});
