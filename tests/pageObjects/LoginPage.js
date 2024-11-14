class LoginPage {

    constructor(page)
    {
        this.page = page;
        this.loginBtn = page.locator("a[class='ng-scope']");
        this.userName = page.locator("input[name='username']");
        this.password = page.locator("input[name='password']");
        this.signInBtn = page.locator("button[type='submit']");
        this.rememberMeBtn = page.locator("[type = 'checkbox']");
    }
    
    async login(username,password)
    {
         await this.loginBtn.click()
         await this.userName.type(username);
         await this.password.type(password);
         await this.signInBtn.click();
    }
    
    
    }
    
module.exports = {LoginPage};