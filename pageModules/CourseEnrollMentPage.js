const { expect } = require('@playwright/test');
const Selectors = require("../Selectors/Selectors");
class CourseEnrollmentPage {

    /**
     * Verify Course Name
     * @param {string} courseName - Course Name
     */
    async verifyCourseName(courseName){
        await page.waitForSelector(Selectors.courseNameWithSpecificHeader("h2", courseName));
        await expect(await page.$eval(Selectors.courseNameSelectorh2, ele => ele.innerText)).toBe(courseName);
    }

    /**
     * Click on Course Enroll Button
     */
    async clickCourseEnrollBtn(){
        await page.waitForSelector(Selectors.courseEnrollLink);
        await page.click(Selectors.courseEnrollLink);
    }
}
module.exports = CourseEnrollmentPage;