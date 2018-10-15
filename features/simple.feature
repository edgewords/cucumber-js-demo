Feature: Simple Example
  In order to use the internet
  As a user
  I want to search for sites

  Scenario: google search
    Given I am on the Google web page
    When I search for 'Edgewords'
    Then 'Edgewords' appears in the results