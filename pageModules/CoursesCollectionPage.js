const { expect } = require('@playwright/test');
const Selectors = require("../Selectors/Selectors");
class CoursesCollectionPage {

    /**
     * Verify User Loged In
     * @param {string} firstName - First Name of User
     */
    async verifyUserLogedIn(firstName){
        await page.waitForSelector(Selectors.profileMenuBtn);
        await expect(await page.$eval(Selectors.profileMenuBtn, ele => ele.innerText)).toContain(firstName);
    }

    /**
     * Click on Profile Button
     */
    async clickProfileBtn(){
        await page.waitForSelector(Selectors.profileMenuBtn);
        await page.click(Selectors.profileMenuBtn);
    }

    /**
     * Click on My Account Button
     */
    async clickMyAccountBtn(){
        await page.waitForSelector(Selectors.links("/account"));
        await page.click(Selectors.links("/account"));
    }

    /**
     * Click on Courses Collection Page Link
     */
    async clickCoursesCollectionPageLink(){
        await page.waitForSelector(Selectors.links("/collections"));
        await page.click(Selectors.links("/collections"));
    }

    /**
     * Click on Specific Course EnrollMent Page Link
     * @param {string} courseName - Course Name
     */
    async clickSpecificCourseEnrollmentPageLink(courseName){
        await page.waitForSelector(Selectors.courseNameWithSpecificHeader("h3", courseName));
        await page.click(Selectors.courseNameWithSpecificHeader("h3", courseName));
    }

    /**
     * Click on My Dashboard Page Link 
     */
    async clickMyDashboardPageLink(){
        await page.waitForSelector(Selectors.links("/enrollments"));
        await page.click(Selectors.links("/enrollments"));
    }

    /**
     * Click on Sign-Out Button
     */
    async clickSignOutBtn() {
        await page.waitForSelector(Selectors.links("/users/sign_out"));
        await page.click(Selectors.links("/users/sign_out"));
    }
}
module.exports = CoursesCollectionPage;

    
