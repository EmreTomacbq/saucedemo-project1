Feature: WEB-010

  Scenario Outline: As a user, I am able to open and login to Saucedemo Website

    Given I am on the login page
    When I login with <username> and <password>
    #Then I should see login <message>
    Then I should see on Home page

    Examples:
      | username          | password             |  message  |
      | standard_user     | secret_sauce         |  success   |
      #| locked_out_user   | secret_sauce         |  failed  |
