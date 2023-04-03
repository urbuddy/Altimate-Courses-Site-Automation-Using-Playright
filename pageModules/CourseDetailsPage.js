const { expect } = require('@playwright/test');
const Selectors = require("../Selectors/Selectors");
class CourseDetailsPage {

    /**
     * Verify Enrolled Course Name
     * @param {string} courseName - Enrolled Course Name
     */
    async verifyEnrolledCourseName(courseName){
        await page.waitForSelector(Selectors.courseNameWithSpecificHeader("h1", courseName));
        await expect(await page.$eval(Selectors.headerH1, ele => ele.innerText)).toBe(courseName);
    }

    /**
     * Open Courses Collection Page
     */
    async openCoursesCollectionPage(){
        await page.goto(Selectors.collectionPageURL, {waitUntil: "domcontentloaded"});
    }
}
module.exports = CourseDetailsPage;