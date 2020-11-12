Feature: Sign In and Create Account page

#This is how we can go to Sign in and Create Account page

  Scenario: Sign In link opens the sign in page.
  	Given I go to the jobs homepage 
    And I click on Sign In Link
    Then I should see the Sign in form
	
  Scenario: Create Account link opens the sign in page.
  	Given I go to the jobs homepage 
    And I click on Create Account Link
    Then I should see the Create Account form
    
    