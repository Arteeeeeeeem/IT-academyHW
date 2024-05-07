Feature: Blog Page


Scenario: Blog Page has Title "Blog | WebdriverIO"

Given I am on the home page
When  I go to the blog page
Then I should see a blog page title


Scenario: Every Blog Page Post has Title

Given I am on the home page
When  I go to the blog page
Then Every Post has Title


Scenario: Every Blog Page Post has Date

Given I am on the home page
When  I go to the blog page
Then Every Post has Date


