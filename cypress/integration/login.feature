Feature: User Login

  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user enters a valid email and password
    And the user clicks on the login button
    Then the user should see a success message
