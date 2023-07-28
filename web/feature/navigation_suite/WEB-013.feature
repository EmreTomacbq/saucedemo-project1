Feature: WEB-013

  Scenario Outline: As a user, I am able to go through the Saucedemo Homepage

    Given I am on the login page
    When I login with <username> and <password>
    When I am going through the footer

    Examples:
      | username      | password             |
      | standard_user | secret_sauce         |