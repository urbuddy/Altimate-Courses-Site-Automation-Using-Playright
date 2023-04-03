const { expect } = require('@playwright/test');
const Selectors = require("../Selectors/Selectors");
class CourseEnrollmentPage {

    /**
     * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
    }
    /**
     * Verify Course Name
     * @param {string} courseName - Course Name
     */
    async verifyCourseName(courseName){
        await this.page.waitForSelector(Selectors.courseNameWithSpecificHeader("h2", courseName));
        await expect(await this.page.$eval(Selectors.courseNameSelectorh2, ele => ele.innerText)).toBe(courseName);
    }

    /**
     * Click on Course Enroll Button
     */
    async clickCourseEnrollBtn(){
        await this.page.waitForSelector(Selectors.courseEnrollLink);
        await this.page.click(Selectors.courseEnrollLink);
    }
}
module.exports = CourseEnrollmentPage;