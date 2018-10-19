Feature: Simple Example
  In order to use the internet
  As a user
  I want to search for sites

  Scenario: google search
    Given I am on the Google web page
    When I search for "Edgewords"
    Then "Edgewords" appears in the results

  Scenario Outline: google multi-search
    Given I am on the Google web page
    When I search for "<term>"
    Then "<term>" appears in the results

    Examples:
      | term      |
      | Edgewords |
      | Ranorex   |

  Scenario: google search inline
    Given I am on the Google web page
    When I search for "Edgewords"
    Then I see in the results:
      | name      | url                     |
      | Edgewords | edgewordstraining.co.uk |
      | Edgewords | linkedin.com            |