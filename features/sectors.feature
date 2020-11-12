Feature: Sectors Feature

#This is how we can see the sectors list and verify the job details 

Scenario: Test sectors list
	Given I go to the jobs homepage 
	And I click on sector "Health"
	Then I should see "Health" jobs in search result

Scenario: Verify job details page for Sectors result
	Given Job sector results for sector "Health" are shown
	When I click View Details button for "Senior Bioinformatics Officer (Bioinformatics Unit)" job
	Then I should see job details page of "Senior Bioinformatics Officer (Bioinformatics Unit)" with apply button
	
