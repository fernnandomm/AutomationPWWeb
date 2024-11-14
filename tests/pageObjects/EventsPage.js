class EventsPage {

    constructor(page)
    {
        this.page = page;
        this.upcomingEventsTab = page.locator("#tab-item-14")
        this.pastEventsTab = page.locator("#tab-item-15")
        this.upcomingHeader = page.locator("//span[@class='padding-medium md-headline ng-binding']")
        this.addButton = page.locator("//i[.='add_circle']")
        
    }  
    

    
    
}

module.exports = {EventsPage};