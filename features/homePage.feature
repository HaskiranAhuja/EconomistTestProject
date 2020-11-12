Feature: Jobs page

#This is how we can see the homepage components

  Scenario: Home page renders with the required components
    Given I go to the jobs homepage
    Then I should see the navigation bar
    And I should see the all the search fields
    And I should see the sector lists
    And I should see the jobs blog section
    And I should see the featured jobs section
    And I should see the footer
    
