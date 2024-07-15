Feature: User Signup

  Scenario: Successful signup with valid details
    Given the user is on the signup page
    When the user enters a valid email and password
    And the user clicks on the signup button
    Then the user should see a success message
