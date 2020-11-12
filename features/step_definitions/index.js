const { Given, Then, When} = require('cucumber');
const { By } = require('selenium-webdriver');
const World = require('../support/world');



Given(/^I go to the jobs homepage$/, () => World.goToJobsPage());

Then(/^I should see the navigation bar$/, async () => {
  return World.driver.findElement(By.id('primary-nav'));
})

Then(/^I should see the all the search fields$/, async () => {
  return World.findSearchFields();
})

Then(/^I should see the sector lists$/, async () => {
  return World.findSectorLists();
})

Then(/^I should see the jobs blog section$/, async () => {
  return World.driver.findElement(By.xpath("//span[contains(text(),'Jobs blog')]"));  
})
 
Then(/^I should see the featured jobs section$/, async () => {
  return World.driver.findElement(By.xpath("//span[contains(text(),'Featured jobs')]"));
})

Then(/^I should see the footer$/, async () => {
  return World.driver.findElement(By.xpath("//nav[@class='tertiary-nav block']"));  
})


  

Given(/^I click on Sign In Link$/, async () => {
	await World.driver.sleep(2000);
	await World.driver.findElement(By.linkText('Sign in')).click();
});
Then(/^I should see the Sign in form$/, async () => {
  return World.validateSignInPage();
})

Given(/^I click on Create Account Link$/, async () => {
	await World.driver.sleep(2000);
	await World.driver.findElement(By.linkText('Create account')).click();
});
Then(/^I should see the Create Account form$/, async () => {
  return World.validateCreateAccountPage();
})




Given('I enter search keyword as {string}', async (keyword) => {
          return World.keyInSearchKeyword(keyword);
});
Given('I enter location as {string}', async(location) => {
          return World.keyInSearchLocation(location);
});
Given(/^I click on Search button$/, async () => {
	return World.clickSearch();
});
Then('I should see {string} in search result', function (expectedListing) {
           return World.validateSearchResult(expectedListing);
})


Given('Job search results for keyword {string} and location as {string} are shown', async (keyword,location) => {
           return World.search(keyword,location);
});
When('I click View Details button for {string} job', async (jobTitle) => {
           
		   return World.clickJobViewDetails(jobTitle);
		   
});
Then('I should see job details page of {string} with apply button', async (expectedJobTitle) => {
           return World.validateJobDetailsPage(expectedJobTitle);
});
		 

Given('I click on sector {string}', async (requiredSector) => {
		World.clickSector(requiredSector);	
});
Then('I should see {string} jobs in search result', function (expectedSector) {
          return World.validateSectorResult(expectedSector);
});

Given('Job sector results for sector {string} are shown', async (requiredSector) => {
           return World.sectorSearch(requiredSector);
});
		 

