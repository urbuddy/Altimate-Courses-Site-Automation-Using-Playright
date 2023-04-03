const Selectors = require("../Selectors/Selectors");
class HomePage {
  
  /**
   * Open Home Page
   */
  async openHomePageURL() {
    await page.goto(Selectors.homePageURL, {waitUntil: "domcontentloaded"});
  }

  /**
   * Click on Sign Button 
   */
  async clickSignInBtn() {
    await page.waitForSelector(Selectors.links("/users/sign_in"));
    await page.click(Selectors.links("/users/sign_in"));
  }
}
module.exports = HomePage;