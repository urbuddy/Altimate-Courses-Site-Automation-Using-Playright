const { expect } = require('@playwright/test');
const Selectors = require("../Selectors/Selectors");
class CourseDetailsPage {

    /**
     * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
    }

    /**
     * Verify Enrolled Course Name
     * @param {string} courseName - Enrolled Course Name
     */
    async verifyEnrolledCourseName(courseName){
        await this.page.waitForSelector(Selectors.courseNameWithSpecificHeader("h1", courseName));
        await expect(await this.page.$eval(Selectors.headerH1, ele => ele.innerText)).toBe(courseName);
    }

    /**
     * Open Courses Collection Page
     */
    async openCoursesCollectionPage(){
        await this.page.goto(Selectors.collectionPageURL, {waitUntil: "domcontentloaded"});
    }
}
module.exports = CourseDetailsPage;