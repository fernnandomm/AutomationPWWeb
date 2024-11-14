class ClientsPage {

constructor(page){

this.resourcesOfProjectsList = page.locator("//md-list-item[@class='md-3-line _md-button-wrap ng-scope _md']//a[@ui-sref='clients.project.resource({resourceId:resource.id})']");
this.searchField = page.locator("//input[@type='text']");
this.inactiveToggle = page.locator("//div[@class='md-thumb md-ink-ripple']");
//this.returnToClientView = page.locator("//a[@aria-label='Return to Client View']")
this.clientsSearch = page.locator("//a[@class='md-no-style md-button md-ink-ripple']") //list
this.projectDetails = page.locator("//span//b") //list ex: client partner
this.allProjects = page.locator("//*[contains(@class,'clickable md-3-line white-background margin')][@aria-hidden='false']") //get all projects from client
this.allInactiveProjects = page.locator("//md-list-item[@class='clickable md-3-line white-background margin-vertical _md-button-wrap ng-scope _md']")
this.allClients = page.locator("//a[@class='md-no-style md-button md-ink-ripple']") //list of all clients
this.clientPartner = page.locator("(//span[@class='ng-binding'])[1]") //b:has-text('Client Partner:')
this.clientName = page.locator("//span[@class='md-display-1 ng-binding']")
this.clientsNameText = page.locator("//span[@class='md-subhead ng-binding']") 

}  

async getAllClientsText()
{
     return await this.clientsNameText.allTextContents();
}
    

    
    
}

module.exports = {ClientsPage};