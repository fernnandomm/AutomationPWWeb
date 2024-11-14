const {expect} = require('@playwright/test');
const userData = JSON.parse(JSON.stringify(require("../testData/profileData.json")));
class APiUtils {

    constructor(apiContext,loginPayLoad) {
        this.apiContext =apiContext;
        this.loginPayLoad = loginPayLoad;
    }

    /**
     * author: berk ogutal - dustin gozel
     * When you provide profile information in the profileData.json file and import it to the test file
     * it will get the token dynamically.
     * @returns token
     */
    async getToken() {
        const loginResponse = await this.apiContext.post("https://portal.nexient.com/gateway/api/authentication/authenticate",
        {
            data:this.loginPayLoad,
            headers:{
                "Content-Type"  : "application/json",
                "Version"  : "2"
            }
         }
         )
    expect(loginResponse.ok()).toBeTruthy();
    const responseJson = await loginResponse.json();
    //console.log(responseJson);
    //console.log(loginResponse.headersArray());
    let headArr = loginResponse.headersArray();
    let token;
    for(let i = 0; i < headArr.length; i++){
        if(headArr[i].name === 'accessToken'){
            token = headArr[i].value;
        }
    }
    //console.log(token);
    return token;
    }

   /**
    * author: berk ogutal - dustin gozel
    * Encodes the token to send as cookie.
    * @returns encoded token
    */
   async getEncodedToken()
   {
    let encodedToken = "%7B%22accesstoken%22%3A%22"+await this.getToken()+"%22%7D";
    return encodedToken;
   }

      /**
    * author: berk ogutal - dustin gozel
    * Encodes the user object to send as cookie.
    * @returns encoded user
    */
   async getEncodedUser()
   {
    let encodedUser = "%7B%22username%22%3A%22"+userData.username+"%22%2C%22displayName%22%3A%22"+userData.firstName+"%20"+userData.lastName+"%22%2C%22authdata%22%3A%22"+userData.authData+"%3D%22%2C%22roles%22%3A%5B%22"+userData.roles+"%22%5D%7D";
    return encodedUser;
   }

   /**
    * author: berk ogutal - dustin gozel
    * Get the all clients and convert to json
    * @returns all clients json
    */
    async getAllClients()
     {
       const clientRespone = await this.apiContext.get("https://portal.nexient.com/gateway/api/clients/",
        {
        headers:
            {
            "Version" : "1",
            "X-Authorization" : await this.getToken()
            }
        }
    )
    expect(clientRespone.ok()).toBeTruthy();
    const clientsJson = await clientRespone.json();
    return clientsJson;
   }

   /**
    * author: berk ogutal - dustin gozel
    * Get the all skills and convert to json
    * @returns all skills as json
    */
   async getSkills()
   {
     const skillsRespone = await this.apiContext.get("https://portal.nexient.com/gateway/api/employee-skills/employees/"+userData.username,
      {
      headers:
          {
          "Version" : "1",
          "X-Authorization" : await this.getToken(),
          "tenantId" : "nexient"
          }
      }
  )
  expect(skillsRespone.ok()).toBeTruthy();
  const skillsJson = await skillsRespone.json();
  return skillsJson;
 }
   

    }
module.exports = {APiUtils};




