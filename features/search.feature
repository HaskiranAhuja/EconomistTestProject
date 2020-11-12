Feature: Search Feature

#This is how we can see the search results and verify the job details

Scenario: Search provides the correct result 
	Given I go to the jobs homepage 
	And I enter search keyword as "Senior Bioinformatics Officer"
	And I enter location as "Hong Kong (HK)"
	And I click on Search button
	Then I should see "Senior Bioinformatics Officer (Bioinformatics Unit)" in search result

Scenario: Verify job details page
	Given Job search results for keyword "Senior Bioinformatics Officer" and location as "Hong Kong (HK)" are shown
	When I click View Details button for "Senior Bioinformatics Officer (Bioinformatics Unit)" job
	Then I should see job details page of "Senior Bioinformatics Officer (Bioinformatics Unit)" with apply button
	
