
Feature: Login

  Scenario Outline: Login with valid credentials
    Given I am on the login page
    When I enter the username <username> and password <password>
    And I click on the login button
    Then I should be redirected to the Products page
    Examples:
      | username      | password     |
      | standard_user | secret_sauce |