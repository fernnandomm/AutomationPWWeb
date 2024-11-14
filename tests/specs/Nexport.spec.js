const nexportUrl = JSON.parse(JSON.stringify(require("../testData/base.json")));
const {test, expect, request} = require('@playwright/test');
const expectchai = require('chai').expect
const {APiUtils} = require('../utils/APiUtils');
const userData = JSON.parse(JSON.stringify(require("../testData/profileData.json")));
const {POManager} = require('../pageObjects/POManager.js');
require('dotenv').config();

let loginPayLoad = { "username":userData.username, "password":userData.password};
let token; let user; let clients; let page;

test.beforeAll(async({browser}) => {
    const context = await browser.newContext();
    page = await context.newPage();
    const apiContext = await request.newContext();
    const apiUtils = new APiUtils(apiContext,loginPayLoad);
    token = await apiUtils.getToken();
    //console.log("token: " + token);
    token = await apiUtils.getEncodedToken();
    user = await apiUtils.getEncodedUser();
    await page.addInitScript(value => {
      document.cookie=`token=${value}`;
     }, token);
    await page.addInitScript(value => {
      document.cookie=`user=${value}`;
     }, user);
})


test('@Web @Mobile Profile Validation', async () => {
   await page.goto(`https://portal.nexient.com/#!/profile/${userData.username}/overview`, { waitUntil: 'networkidle' });
   await expect(page).toHaveURL(`https://portal.nexient.com/#!/profile/${userData.username}/overview`);
   const poManager = new POManager(page); 
   const profilePage = poManager.getProfilePage();
   
   await expect(profilePage.jobTitle).toHaveText('Job Title: ' + userData.title);
   await expect(profilePage.email).toHaveText('Email: ' + userData.email);
   await expect(profilePage.manager).toHaveText('Manager: ' + userData.manager);
   await expect(profilePage.careerCoach).toHaveText('Career Coach: ' + userData.careercoach);
})

test("@Mobile @Web clientsNames validation", async() => {
    //Get to the clients page without login.
    await page.goto("https://portal.nexient.com/#!/clients", { waitUntil: 'networkidle' });
    const poManager = new POManager(page);  
    const clientPage = poManager.getClientsPage();
    
    //Get the clients name texts from UI.
    let clientsNameUI = await clientPage.getAllClientsText();
    const apiContext = await request.newContext();
    const apiUtils = new APiUtils(apiContext,loginPayLoad);
    
    //Get the clients name from API.
    clients = await apiUtils.getAllClients();
    let clientsNameApi = [];
    for(let i=0; i<clients.length; i++){
        clientsNameApi.push(clients[i].name);
    }
    //if it passes it doesn't show on the report, you can see result in the report if you validate using for loop below.
    //expectchai(clientsNameApi).to.include.members(clientsNameUI);
    for(let i=0; i<clientsNameUI.length; i++){
       expect(clientsNameApi).toContain(clientsNameUI[i])
    }
})


test('@Mobile @Web Skill Validation', async () => {
  const poManager = new POManager(page);  
  const profilePage = poManager.getProfilePage();
  await page.goto(`https://portal.nexient.com/#!/profile/${userData.username}/overview`, { waitUntil: 'networkidle' });

  //Get the name of the skills as a text from UI and put it in an array.
  let oneSkill = await profilePage.allSkillsList.nth(1).textContent();
  let skillsUI = await profilePage.allSkillsList.allTextContents();
  console.log("UI-->"+skillsUI);
  let skillsNamesUI = [];
  for(let i=0; i<skillsUI.length; i++){
      let oneSkill = skillsUI[i].trim();
      oneSkill = oneSkill.substring(oneSkill.indexOf(" "));
      skillsNamesUI.push(oneSkill.trim());
  }
  skillsNamesUI = JSON.stringify(skillsNamesUI.sort());

   //Get the name of the skills as a text from API.
   const apiContext = await request.newContext();
   const apiUtils = new APiUtils(apiContext,loginPayLoad);
   const skillsApi = await apiUtils.getSkills();
   console.log("API-->"+skillsApi);
   let skillsNameApi = [];
   for (let i = 0; i < skillsApi.length; i++){ 
      skillsNameApi.push(await skillsApi[i].skill.name);
   }
   skillsNameApi = JSON.stringify(skillsNameApi.toString().split(",").sort());
   expect(skillsNameApi).toEqual(skillsNamesUI)
})