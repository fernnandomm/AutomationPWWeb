class ProfilePage {

    constructor(page){

        this.page = page;
        this.jobTitle = page.locator("//*[.='Job Title: Sr. QE Manager']");
        this.email = page.locator("span[aria-label='Email'] span[class='md-subhead horizontal-padding ng-binding']");
        this.manager = page.locator("span[aria-label='Manager'] span[class='md-subhead horizontal-padding ng-binding']");
        this.careerCoach = page.locator(".md-subhead.horizontal-padding.ng-binding[aria-label='Career Coach']");
        this.addSkillBtn = page.locator("//i[@class='material-icons md-24 nexient-orange ng-scope']");
        this.skillDropdown = page.locator("//md-select[@ng-model='employeeSkillDialogCtrl.employeeSkillObj.skill']");
        this.allSkillsList = page.locator("//md-list-item//div//div//div[@class='ng-binding flex-noshrink']") //returning all skills as a list
        this.yearsOfExperienceField = page.locator("//input[@ng-model='employeeSkillDialogCtrl.employeeSkillObj.yearsExperience']");
        this.skillLevelDropdown = page.locator("//md-select[@ng-model='employeeSkillDialogCtrl.employeeSkillObj.skillLevel']");
        this.desireToUseDropdown = page.locator("//md-select[@aria-label='Desire to Use Skill :']");
        this.primaryRadioBtn = page.locator("//md-radio-button[@value='PRIMARY']");
        this.secondaryRadioBtn = page.locator("//md-radio-button[@value='SECONDARY']");
        this.saveBtn = page.locator("//button[@ng-click='employeeSkillDialogCtrl.ok()']");
        this.addedSkillsList = page.locator("//div[@class='ng-binding flex-noshrink']");
        this.deleteSkillBtn = page.locator("//i[@ng-click='profileCtrl.deleteEmployeeSkill(empSkill)']");
        this.yesBtn = page.locator("//button[@aria-label='Delete Employee Skill']");
        this.projectsList = page.locator("//md-card-title-text[@class='horizontal-padding md-body-1']"); //list of projects that joined by owner of the profile
        this.currentProject = page.locator("//span[.='QE Practice - QE I - Sr QE II']");
        
       }

    }
    
module.exports = {ProfilePage};