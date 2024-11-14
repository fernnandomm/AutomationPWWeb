// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  retries :1, //After failing for the first time it will retry '1' more time for the failed tests
  //workers: 6, // For parallel test PW does 5 workers by default. It will start 5 sessions at a time for files you have in the tests folder.

  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
  
    timeout: 5000
  },
  
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  projects: [
  {
  name:'mobileChrome',
use: {
browserName : 'chromium',
headless : true,
screenshot : 'on',
trace : 'on', //'retain-on-fail'//off
video : 'off', //this will capture video if the test fails. Other options: 'on', 'retain-on-failure', 'on-first-retry'
//ignoreHttpsErrors : true, //this will help you to load the website even it is not HTTPS and accept that SSL certificate
//permissions: ['geolocation'], //sometimes chrome has popup asking you to allow to know your location. this gives permission
//viewPort : {width: 1510, height: 1050}, //this sets up the browser size
...devices ['Galaxy S9+'] //you can choose the mobile phone other than apple here to run your test in that phone's screen size

}
},
{
  name:'mobileSafari',
use: {
  browserName : 'webkit',
  headless : true,
  screenshot : 'on',
  trace : 'on', //'retain-on-fail'//off,on
  ...devices ['iPhone 13'] //you can choose the mobile phone other than apple here to run your test in that phone's screen size
}
}

  ],
  };

module.exports = config;