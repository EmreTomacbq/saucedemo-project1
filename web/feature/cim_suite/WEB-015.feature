Feature: WEB-015

  Scenario Outline: As a user, I am able to check blocked User of Saucedemo Website

    Given I am on the login page
    When I login with <username> and <password>
    Then Login problem User

    Examples:
      | username         | password             |
      | problem_user     | secret_sauce         |