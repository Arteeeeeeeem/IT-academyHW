Feature: Navigation
Navigation component tests

Scenario Outline: Should visit target Page by clicking menu link from Page

Given I am on the <page> page
When  I click "<menuItem>" menu link
Then URL should contain "<path>"

Examples:
    | page | menuItem | path |
| community | API  | api |
| contribute | Blog  | blog |
| gettingStarted | Community | community |
