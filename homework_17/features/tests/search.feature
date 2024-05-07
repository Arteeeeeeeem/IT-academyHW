Feature: Search
  Search component test

  Scenario Outline: Search from the search bar produces correct URL results

    Given I am on the <page> page
    When I enter "<keyWord>" into the search bar
    And I press key "Enter"
    Then URL should contain "<keyWord>"

    Examples:
      | page | keyWord |
      | blog | docker |
      | community | Cookies  |
      | contribute | wait |
      | gettingStarted | setWindowSize |