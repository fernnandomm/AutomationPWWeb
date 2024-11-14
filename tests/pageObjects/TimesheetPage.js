class TimesheetPage {

    constructor(page){
        this.page = page;
        this.jobTitle = page.locator("//*[.='Job Title: Quality Engineer II']");
        this.email = page.locator("span[aria-label='Email'] span[class='md-subhead horizontal-padding ng-binding']");
        this.manager = page.locator("span[aria-label='Manager'] span[class='md-subhead horizontal-padding ng-binding']");
        this.careerCoach = page.locator(".md-subhead.horizontal-padding.ng-binding[aria-label='Career Coach']");
        this.coachees = page.locator("//div[.='Coachees:']")
        this.updateManager = page.locator("[aria-label='Manager assignment type update']")
        this.timeInputBoxes = page.locator("div[class='layout-padding ng-scope flex-10']") //7 day
        this.totalTimeBox = page.locator("div[class='layout-padding flex-15']")
        this.fillBoxes = page.locator(".layout-padding.flex-15")
        this.submitButton = page.locator("button[type='submit']")
    }  
        
    
        
        
    }
    
    module.exports = {TimesheetPage};