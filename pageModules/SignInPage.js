const Selectors = require("../Selectors/Selectors");
class SignInPage {

    /**
     * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
    }

    /**
     * Click on Sign-Up Button
     */
    async clickSignUpBtn() {
        await this.page.waitForSelector(Selectors.links("/users/sign_up"));
        await this.page.click(Selectors.links("/users/sign_up"));
    }
}
module.exports = SignInPage;