class HomePage {

    constructor(page)
    {
        this.page = page;
        this.profileBtn = page.locator("span.ng-scope").first();
        this.homeBtn = page.locator("[aria-label='Home']").first();
        this.eventsBtn = page.locator("[aria-label='Events']").first();
        this.timesheetBtn = page.locator("[aria-label='View Timesheet']").first();
        this.clientsBtn = page.locator("[aria-label='View Client Workflow']").first();
        this.clientsBtnMobile = page.locator("[aria-label='View Client Workflow']").nth(1);
        this.searchBtn = page.locator("//i[.='search']");
        this.exitBtn = page.locator("button[aria-label='Logout'] i[class='material-icons md-24 md-light ng-scope']");
        this.exitBtnMobile = page.locator("//button[@aria-label='Logout']//i").last();
        this.logOutMsg = page.locator("div[ng-if='userLoggedOff']")
        this.listButtonMobile = page.locator("//div//i[.='list']");


    }
  
    
    
    }
    
module.exports = {HomePage};