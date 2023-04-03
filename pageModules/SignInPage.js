const Selectors = require("../Selectors/Selectors");
class SignInPage {

    /**
     * Click on Sign-Up Button
     */
    async clickSignUpBtn() {
        await page.waitForSelector(Selectors.links("/users/sign_up"));
        await page.click(Selectors.links("/users/sign_up"));
    }
}
module.exports = SignInPage;