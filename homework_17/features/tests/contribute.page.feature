Feature: Blog Page
Blog page has title Blog | WebdriverIO

Scenario: Contribute Page has Title "Contribute | WebdriverIO"

Given I am on the home page
When  I go to the contribute page
Then I should see a contribute page title

Scenario: Contribute Page "Contribute" header

Given I am on the home page
When  I go to the contribute page
Then I should see contribute page header