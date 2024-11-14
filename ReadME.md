Playwright Automation Framework 
#created by --> berk ogutal, dustin gozel

🔨 Build your own
<> Install Node 16 version
<> Install Visual Studio Code
<> Clone the repo to the VSCode
<> After opening the project in VSCode 
<> Open a terminal -> new terminal
 |- Install the Playwright using npx playwright install. This will install playwright.
 |- Install the dependencies using npm install. This will install all dependencies shown in package.json file.
 |- example.spec.js that comes by default will have example script to use Playwright. 

Have fun building something!


📁Structure

>> playwright-report --> results after running the scripts will be visible here
     > data: There is a zip file containing the traces of the report.
     > trace: 
     > index.html: Report will be generated here. Copy path and paste in the browser. You can access traces, screenshots and videos from report.  
>> test-results: Screenshots can be store in here. 
>>tests
    >specs --> All test cases are written in this folder. The files need to have .spec.js extension
    >pageobjects --> Locators and method related to a page storing here. That means that for each page we would define a new Page object for our needs.
    >testData --> Datas, credentials related to tests storing here.
        > profileData.json: All profile data should be provided in this file.
    >utils -->
        > APiUtils: Reusable api methods.

important files to have:
 |- playwright.config.js --> all framework level configurations are defined here.
 |- playwrightMobile.config.js --> all framework level mobile configurations are defined here.
 |- package.json --> Scripts can define here. Dependencies can be store in this file.
 |- .env --> You can store datas here to use in scripts. (To read from it use proccess.env.'KEYOFTHEDATA'). In your spec file for using env file import 'require('dotenv').config();'.

 🔨npx playwright test: it is the command that runs the files.🔨