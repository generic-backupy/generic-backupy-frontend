const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
require("geckodriver");
const driver = new Builder().forBrowser(Browser.FIREFOX).build();

describe("Complete login", () =>{

    it("Fill in login form", async function() {
        try{
            //send driver to website
            await driver.get("http://localhost:3000");

            //enter username
            await driver.findElement(By.name("username")).sendKeys("demo");

            //enter password
            await driver.findElement(By.name("password")).sendKeys("mPK_sv9Sku");

            //click login button
            await driver.manage().setTimeouts( { implicit: 2000 } )
            await driver.findElement(By.name("loginButton")).sendKeys(Key.RETURN)
        }
        finally{
            await driver.close();
        }
        
    });
    
});