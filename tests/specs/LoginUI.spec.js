const nexportUrl = JSON.parse(JSON.stringify(require("../testData/base.json")));
const {test, expect} = require('@playwright/test');
const userData = JSON.parse(JSON.stringify(require("../testData/profileData.json")));
const {POManager} = require('../pageObjects/POManager.js');
require('dotenv').config();

let page;

test.beforeEach(async({browser}) => {
    const context = await browser.newContext();
    page = await context.newPage();
    const poManager = new POManager(page);  
    const loginPage = poManager.getLoginPage();
    await page.goto(nexportUrl.url);
    await loginPage.login(userData.username, userData.password)
    const title = "Nexient: Employee Portal"; 
    await expect(page).toHaveTitle(title);
})

test("@Mobile Client UI Validation", async({}) =>{
    const poManager = new POManager(page);  
    const homePage = poManager.getHomePage();
    const clientPage = poManager.getClientsPage();
    await homePage.listButtonMobile.click();
    await homePage.clientsBtnMobile.click();
    let clientsNameUI = await clientPage.getAllClientsText();
    //console.log(clientsNameUI);
})

test.afterEach(async () => {  
    const poManager = new POManager(page);  
    const homePage = poManager.getHomePage();
    await homePage.listButtonMobile.click();
    await homePage.exitBtnMobile.click();
    const msg = 'You have been successfully logged off.';
    await expect(homePage.logOutMsg).toHaveText(msg); 
});