Feature: WEB-011

  Scenario Outline: As a user, I am able to open and logout of Saucedemo Website

    Given I am on the login page
    When I login with <username> and <password>
    Then I logout on the saucedemo page

    Examples:
      | username      | password             |
      | standard_user | secret_sauce         |