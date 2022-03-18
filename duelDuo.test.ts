
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test("Test to see if the 'draw' button shows the 'choices' div", async () => {
    await driver.findElement(By.xpath('//button[text()="Draw"]')).click()
    await driver.sleep(2000)
    const botChoices = await driver.findElement(By.xpath('//div[@id="choices"]'))
    expect(botChoices.isDisplayed()).toBeTruthy()
})

test("Test to see if the 'Add to Duo' Button displays the 'player duo' div", async () => {
    await driver.findElement(By.xpath('//button[text()="Draw"]')).click()
    await driver.sleep(2000)
    await driver.findElement(By.xpath('//body/section[1]/div/div[1]/button')).click()
    await driver.sleep(2000)
    const playerDuo = await driver.findElement(By.xpath('//div[@id="player-duo"]'))
    expect(playerDuo.isDisplayed()).toBeTruthy()
})