const { setWorldConstructor, setDefaultTimeout } = require('cucumber');
const { By, Builder, Capabilities } = require('selenium-webdriver');
const assert = require('cucumber-assert');

require('chromedriver');

const DEFAULT_TIMEOUT = 60000;
const BASE_URL = 'https://jobs.economist.com';

function buildDriver() {
  const chromeCapabilities = Capabilities.chrome();
  const chromeOptions = {
    args: ['incognito', 'window-size=1920,1080'],
  };

  chromeCapabilities.set('chromeOptions', chromeOptions);

  return new Builder()
    .forBrowser('chrome')
    .withCapabilities(chromeCapabilities)
    .build();
}

class CustomWorld {
	
  goToJobsPage() {
    return this.driver.get(BASE_URL);
  }

  start() {
    this.driver = buildDriver();
  }

  async end() {
    await this.driver.close();
    return this.driver.quit();
  }
  
  // Below code will search the fields using Webelement:id
	findSearchFields(){
		this.driver.findElement(By.id('keywords'));
		this.driver.findElement(By.id('location'));
		this.driver.findElement(By.id('RadialLocation'));
	}
	
	// This code will find jobs by Sector using Webelement:linkTesxt
	
	findSectorLists(){
		this.driver.findElement(By.linkText('Banking and finance'));
		this.driver.findElement(By.linkText('Business services'));
		this.driver.findElement(By.linkText('IT and telecoms'));
		this.driver.findElement(By.linkText('Government'));
	}
	
	
	//ValidateSignInPage() & validateCreateAccountPage() will validate the correct sign in and create Account page
	
	async validateSignInPage()
	{
		await this.driver.sleep(2000);
		var url = await this.driver.getCurrentUrl();
		
		await assert.equal(url, 'https://jobs.economist.com/logon/','Invalid Sign In URL');
	}
	
	async validateCreateAccountPage()
	{
		await this.driver.sleep(2000);
		var url = await this.driver.getCurrentUrl();
		
		await assert.equal(url, 'https://jobs.economist.com/register/','Invalid Create Account URL');
	}
	
	
	/* Below code shows the data searched with keyword and location
keyword: This is the parameter we get from Feature file
Location : This parameter we get from Feature file	*/
	
	async keyInSearchKeyword(keyword)
	{
		await this.driver.sleep(1000);
		await this.driver.findElement(By.id('keywords')).sendKeys(keyword);
	}
	
	async keyInSearchLocation(location)
	{
		await this.driver.sleep(500);
		await this.driver.findElement(By.id('location')).sendKeys(location);
		await this.driver.sleep(500);
		let locationOptions = await this.driver.findElements(By.xpath('//div[@class="autocomplete-suggestion"]'));

		for(let loc of locationOptions){
			if(await loc.getText() == location)	 {
				await loc.click();
				break;
			} 
		}
	}
	
	async clickSearch()
	{
		await this.driver.sleep(500);
		return await this.driver.findElement(By.xpath('//*[@type="submit"]')).click();
	}
	
	// To validate the searched results
	
	async validateSearchResult(expectedListing)
	{
		await this.driver.sleep(3000);
		return await this.driver.findElement(By.linkText(expectedListing));
	}
	
	
	
	async search(keyword, location)
	{
		await this.goToJobsPage();
		await this.keyInSearchKeyword(keyword);
		await this.keyInSearchLocation(location);
		return await this.clickSearch();			
	}
	
	//Below code shows on clicking View Details , we should see job description with Apply button
	async clickJobViewDetails(jobTitle)
	{
		await this.driver.sleep(3000);
		const jobTitleElement = await this.driver.findElement(By.linkText(jobTitle));
		const parentListElement = await jobTitleElement.findElement(By.xpath("./../../.."));
		
		return await parentListElement.findElement(By.xpath('//a[@class="button button--lister-view-details"]')).click();
	}
	
	async validateJobDetailsPage(expectedJobTitle)
	{
		await this.driver.sleep(2000);
		const jobPagetitle = await this.driver.findElement(By.xpath('//div/h1')).getText();
		await assert.equal(jobPagetitle, expectedJobTitle,'Incorrect Job Page: Invalid Job Title');
		return await this.driver.findElement(By.linkText("Apply"));
	}
	
/* Below code shows by clicking on a sector shows a list of jobs from only that sector. Clicking further on a job listing shows the job details, with an 'apply' button.
Required sector and Expected Sector we will get from Feature file */
	
	async clickSector(requiredSector)
	{
		await this.driver.sleep(2000);
		await this.driver.findElement(By.linkText(requiredSector)).click();
	}
	
	async validateSectorResult(expectedSector)
	{
		await this.driver.sleep(5000);
		const resultPageTitle = await this.driver.findElement(By.xpath('//div/h1')).getText();
		const expectedSectorTitle = expectedSector + ' jobs';

		await assert.equal(resultPageTitle, expectedSectorTitle,'Incorrect Results: Invalid Job Sector');
	}
	
	async sectorSearch(requiredSector)
	{
		this.goToJobsPage();
		await this.clickSector(requiredSector);	
		await this.driver.sleep(2000);
	}
	
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(DEFAULT_TIMEOUT);

module.exports = new CustomWorld();
