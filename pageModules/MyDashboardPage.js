const { expect } = require('@playwright/test');
const Selectors = require("../Selectors/Selectors");
class MyDashboardPage {

    /**
     * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
    }

    /**
     * Verify Welcome Text of Dashboard
     * @param {string} firstName - First Name of User
     */
    async verifyWelcomeText(firstName){
        await this.page.waitForSelector(Selectors.courseNameWithSpecificHeader("h2", "Welcome back"));
        await expect(await this.page.$eval(Selectors.courseNameWithSpecificHeader("h2", "Welcome back"), ele => ele.innerText)).toContain(firstName);
    }

    /**
     * Verify the Enrolled Course
     * @param {string} courseName - Course Name
     */
    async verifyEnrolledCourses(courseName){
        await this.page.waitForSelector(Selectors.courseNameWithSpecificHeader("h3", courseName));
        await expect(await this.page.$eval(Selectors.enrolledCourseSelector, ele => ele.innerText)).toBe(courseName);
    }
}
module.exports = MyDashboardPage;