const { expect } = require('@playwright/test');
const Selectors = require("../Selectors/Selectors");
class SignUpPage {

    /**
     * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
    }

    /**
     * Fill and submit Registration Form
     * @param {Object} userDetails - User Details
     * @param {string} userDetails.firstName - User First Name 
     * @param {string} userDetails.lastName - User Last Name 
     * @param {string} userDetails.email - User Email 
     * @param {string} userDetails.password - User Password 
     */
    async fillAndSubmitSignUpForm(userDetails) {
        await this.page.fill(Selectors.userInputFields("first_name"), userDetails.firstName);
        await this.page.fill(Selectors.userInputFields("last_name"), userDetails.lastName);
        await this.page.fill(Selectors.userInputFields("email"), userDetails.email);
        await this.page.fill(Selectors.userInputFields("password"), userDetails.password);
        await this.page.click(Selectors.checkBox);
        await expect(await this.page.isChecked(Selectors.checkBox)).toBeTruthy();
        await this.page.click(Selectors.submitBtn);
    }
}
module.exports = SignUpPage;