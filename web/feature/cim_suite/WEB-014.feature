Feature: WEB-014

  Scenario Outline: As a user, I am able to check blocked User of Saucedemo Website

    Given I am on the login page
    When I login with <username> and <password>
    Then Login blocked

    Examples:
      | username          | password             |
      | locked_out_user   | secret_sauce         |