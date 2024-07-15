Feature: Page Route

  Scenario: When Login link is pressed, Login page is displayed
    Given the user is on the signup page
    When the user clicks on the login link
    Then the user should be taken to the login page
