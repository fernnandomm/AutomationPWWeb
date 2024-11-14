const {LoginPage} = require('./LoginPage');
const {HomePage} = require('./HomePage');
const {ProfilePage} = require('./ProfilePage');
const {ClientsPage} = require('./ClientsPage');
const {EventsPage} = require('./EventsPage');
const {TimesheetPage} = require('./TimesheetPage');

class POManager
{

constructor(page)
{
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.homePage = new HomePage(this.page);
    this.profilePage = new ProfilePage(this.page);
    this.eventsPage = new EventsPage(this.page);
    this.clientsPage = new ClientsPage(this.page);
    this.timesheetPage = new TimesheetPage(this.page);
}

getLoginPage()
{
    return this.loginPage;
}

getHomePage()
{
    return this.homePage;
}

getProfilePage()
{
    return this.profilePage;
}

getEventsPage()
{
    return this.eventsPage;
}

getClientsPage()
{
    return this.clientsPage;
}

getTimesheetPage()
{
    return this.timesheetPage;
}


}
module.exports = {POManager};