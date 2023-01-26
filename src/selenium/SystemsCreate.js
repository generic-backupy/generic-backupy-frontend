const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
require("geckodriver");
const driver = new Builder().forBrowser(Browser.FIREFOX).build();
var assert = require("chai").assert;

describe("Create a new System with the name 'SeleniumSystem", () =>{

    it("Go to systems tab", async function() {
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

            //Click on the Systems tab
            await driver.findElement(By.partialLinkText("Systems")).click();
            await driver.manage().setTimeouts( { implicit: 2000 } )

            //Click on "Add a new System"
            await driver.findElement(By.partialLinkText("Add a new System")).click();
            await driver.manage().setTimeouts( { implicit: 2000 } )

            //Fill out the form and submit
            await driver.findElement(By.name("nameInput")).sendKeys("SeleniumSystem");
            await driver.findElement(By.name("descriptionInput")).sendKeys("This is just a test for Selenium");
            await driver.findElement(By.name("hostInput")).sendKeys("Selenium");
            await driver.findElement(By.name("informationInput")).sendKeys("No additional Information");
            await driver.findElement(By.name("submitButton")).sendKeys(Key.RETURN);

            //Close alert
            setInterval(function(){
                driver.switchTo().alert().accept();
            }, 1000);
            

            //Go back to the Systems list page
            await driver.findElement(By.name("homeNav")).click();
            await driver.manage().setTimeouts( { implicit: 2000 } )
            await driver.findElement(By.partialLinkText("Systems")).click();
            await driver.manage().setTimeouts( { implicit: 2000 } )

            //Check if the new System was created
            let test = await driver.findElement(By.partialLinkText("SeleniumSystem")).getText().then(function(value){
                return value;
            });
            assert.equal(test, "SeleniumSystem");

        }
        finally{
            await driver.close();
        }
        
    });
    
});