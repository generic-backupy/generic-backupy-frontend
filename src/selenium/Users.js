const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
require("geckodriver");
const driver = new Builder().forBrowser(Browser.FIREFOX).build();
var assert = require("chai").assert;

describe("Check if email of user 'demo' is verified", () =>{

    it("Go to users tab", async function() {
        try{
            //send driver to website
            await driver.get("http://localhost:3000");

            //enter username
            await driver.findElement(By.name("username")).sendKeys("demo");

            //enter password
            await driver.findElement(By.name("password")).sendKeys("mPK_sv9Sku");

            //click login button
            await driver.findElement(By.name("loginButton")).sendKeys(Key.RETURN)

            //wait for 2s to let the page load
            await driver.manage().setTimeouts( { implicit: 2000 } )

            //Go to the Users tab
            await driver.findElement(By.partialLinkText("Users")).click();
            await driver.manage().setTimeouts( { implicit: 2000 } )

            //Find the User 'demo'
            await driver.findElement(By.partialLinkText("demo")).click();

            //Check that the email is verified
            let test = await driver.findElement(By.name("verified")).getText().then(function(value){
                return value;
            });
            assert.equal(test, "Email Verified: True");

        }
        finally{
            await driver.close();
        }
        
    });
    
});