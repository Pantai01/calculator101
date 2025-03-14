// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const fs = require('fs')





describe('substractionTest8(reset)', function() {
  this.timeout(30000)
  let driver
  let vars

  if (!fs.existsSync('../screenshots')) {
  
    fs.mkdirSync('../screenshots');
  
  }


  beforeEach(async function() {
    const chrome = require('selenium-webdriver/chrome');

        const options = new chrome.Options();

        options.addArguments('--headless', '--no-sandbox', '--disable-dev-shm-usage');

        driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

    vars = {}
  })
  afterEach(async function() {
     if (driver) {
    
          // Take a screenshot of the result page
    
          const filename = "substractionTest008"
    
              .replace(/['"]+/g, '')
    
              .replace(/[^a-z0-9]/gi, '_')
    
              .toLowerCase();;
    
          const encodedString = await driver.takeScreenshot();
    
          await fs.writeFileSync(`../screenshots/${filename}.png`,
    
              encodedString, 'base64');
    
    
    
          // Close the browser
    
          await driver.quit();
    
        }
  })
  it('substractionTest8(reset)', async function() {
    await driver.get("http://localhost:8000/")
    await driver.manage().window().setRect({ width: 1060, height: 808 })
    await driver.findElement(By.id("subBtn")).click()
    await driver.findElement(By.id("resBtn")).click()

    const filename = 'substractionTest008';
    
    const encodedString = await driver.takeScreenshot();
    
    await fs.writeFileSync(`../screenshots/${filename}.png`,encodedString, 'base64');
  })
})
