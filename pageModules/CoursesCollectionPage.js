const { expect } = require('@playwright/test');
const Selectors = require("../Selectors/Selectors");
class CoursesCollectionPage {

    /**
     * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
    }

    /**
     * Verify User Loged In
     * @param {string} firstName - First Name of User
     */
    async verifyUserLogedIn(firstName){
        await this.page.waitForSelector(Selectors.profileMenuBtn);
        await expect(await this.page.$eval(Selectors.profileMenuBtn, ele => ele.innerText)).toContain(firstName);
    }

    /**
     * Click on Profile Button
     */
    async clickProfileBtn(){
        await this.page.waitForSelector(Selectors.profileMenuBtn);
        await this.page.click(Selectors.profileMenuBtn);
    }

    /**
     * Click on My Account Button
     */
    async clickMyAccountBtn(){
        await this.page.waitForSelector(Selectors.links("/account"));
        await this.page.click(Selectors.links("/account"));
    }

    /**
     * Click on Courses Collection Page Link
     */
    async clickCoursesCollectionPageLink(){
        await this.page.waitForSelector(Selectors.links("/collections"));
        await this.page.click(Selectors.links("/collections"));
    }

    /**
     * Click on Specific Course EnrollMent Page Link
     * @param {string} courseName - Course Name
     */
    async clickSpecificCourseEnrollmentPageLink(courseName){
        await this.page.waitForSelector(Selectors.courseNameWithSpecificHeader("h3", courseName));
        await this.page.click(Selectors.courseNameWithSpecificHeader("h3", courseName));
    }

    /**
     * Click on My Dashboard Page Link 
     */
    async clickMyDashboardPageLink(){
        await this.page.waitForSelector(Selectors.links("/enrollments"));
        await this.page.click(Selectors.links("/enrollments"));
    }

    /**
     * Click on Sign-Out Button
     */
    async clickSignOutBtn() {
        await this.page.waitForSelector(Selectors.links("/users/sign_out"));
        await this.page.click(Selectors.links("/users/sign_out"));
    }
}
module.exports = CoursesCollectionPage;

    
