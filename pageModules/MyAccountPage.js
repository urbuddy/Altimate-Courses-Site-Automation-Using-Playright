const { expect } = require('@playwright/test');
const Selectors = require("../Selectors/Selectors");
class MyAccountPage {
    
    /**
     * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
    }

    /**
     * Verify User Details
     * @param {Object} userDetails - User Details
     * @param {string} userDetails.firstName - User First Name 
     * @param {string} userDetails.lastName - User Last Name 
     * @param {string} userDetails.email - User Email 
     */
    async verifyUserDetails(userDetails){
        await this.page.waitForSelector(Selectors.userInputFields("email"));
        await expect(await this.page.$eval(Selectors.userInputFields("email"), ele => ele.value)).toBe(userDetails.email);
        await expect(await this.page.$eval(Selectors.userInputFields("first_name"), ele => ele.value)).toBe(userDetails.firstName);
        await expect(await this.page.$eval(Selectors.userInputFields("last_name"), ele => ele.value)).toBe(userDetails.lastName);
    }
}
module.exports = MyAccountPage;