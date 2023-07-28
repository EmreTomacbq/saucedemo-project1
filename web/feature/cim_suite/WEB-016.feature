Feature: WEB-016

  Scenario Outline: As a user, I am able to check blocked User of Saucedemo Website

    Given I am on the login page
    When I login with <username> and <password>
    Then Login performance glitch User

    Examples:
      | username                 | password             |
      | performance_glitch_user  | secret_sauce         |