Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I am going through the footer

  Examples:
      | username        | password             |
      | standard_user   | secret_sauce         |