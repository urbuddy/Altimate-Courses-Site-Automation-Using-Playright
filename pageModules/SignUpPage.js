const { expect } = require('@playwright/test');
const Selectors = require("../Selectors/Selectors");
class SignUpPage {

    /**
     * Fill and submit Registration Form
     * @param {Object} userDetails - User Details
     * @param {string} userDetails.firstName - User First Name 
     * @param {string} userDetails.lastName - User Last Name 
     * @param {string} userDetails.email - User Email 
     * @param {string} userDetails.password - User Password 
     */
    async fillAndSubmitSignUpForm(userDetails) {
        await page.fill(Selectors.userInputFields("first_name"), userDetails.firstName);
        await page.fill(Selectors.userInputFields("last_name"), userDetails.lastName);
        await page.fill(Selectors.userInputFields("email"), userDetails.email);
        await page.fill(Selectors.userInputFields("password"), userDetails.password);
        await page.click(Selectors.checkBox);
        await expect(await page.isChecked(Selectors.checkBox)).toBeTruthy();
        await page.click(Selectors.submitBtn);
    }
}
module.exports = SignUpPage;