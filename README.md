# The Economist - QA Engineer

### Scope
We have a jobs site (https://jobs.economist.com) for advertising various career opportunities at The Economist. 
I have created automated test suit for some features . Feature file is created for the scenarios using Cucumber framework.

### End-to-end
I have created a test suite for https://jobs.economist.com/ using the following technologies:
 - NodeJS/JavaScript
 - Cucumber
 - Selenium-Webdriver
 - Chromedriver


### Tested below Features

 - Jobs page renders correctly with the following components visible. 
 homePage.feature is created for all the below mentioned components and step definition is created for all components in index.js file
    - navigation bar
    - search fields
    - sector lists
    - jobs blog
    - featured jobs
    - footer
	
 - Both 'Sign in' and 'Create account' links go to their respective pages.
 signIn.feature file is created for 'Sign in ' and 'Create account' functionality and index.js file creates the Step Definition.
 
 
 - Clicking on a sector shows a list of jobs from only that sector. Clicking further on a job listing shows you the job details, with an 'apply' button.
 sector.feature file is created for this feature and index.js file contains the Step Definition.
 
 
 - Searching for a job correctly displays relevant search results.
 search.feature file is created for search feature and index.js file contains step Definition. 
 
 
 ## Running the tests
To tests the features, i have used below commands:
1. `npm install`
2. `npm run test`
 
 
 
 ## Git : All code has been to GitHub Repository:
 
 https://github.com/HaskiranAhuja/EconomistTestProject.git
 
 
 
 
 
