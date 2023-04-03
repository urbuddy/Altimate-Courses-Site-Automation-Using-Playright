const Selectors = require("../Selectors/Selectors");
class HomePage {

  /**
   * @param {import('@playwright/test').Page} page
  */
  constructor(page) {
    this.page = page;
  }

  /**
   * Open Home Page
   */
  async openHomePageURL() {
    await this.page.goto(Selectors.homePageURL, {waitUntil: "domcontentloaded"});
  }

  /**
   * Click on Sign Button 
   */
  async clickSignInBtn() {
    await this.page.waitForSelector(Selectors.links("/users/sign_in"));
    await this.page.click(Selectors.links("/users/sign_in"));
  }
}
module.exports = HomePage;