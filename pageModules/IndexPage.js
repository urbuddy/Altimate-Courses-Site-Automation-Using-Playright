const { expect } = require('@playwright/test');
class IndexPage {

    HomePage = require("./HomePage");
    MyAccountPage = require("./MyAccountPage");
    MyDashboardPage = require("./MyDashboardPage");
    SignInPage = require("./SignInPage");
    SignUpPage = require("./SignUpPage");
    CourseDetailsPage = require("./CourseDetailsPage");
    CoursesCollectionPage = require("./CoursesCollectionPage");
    CourseEnrollmentPage = require("./CourseEnrollMentPage");
    homePage = new this.HomePage();
    myAccountPage = new this.MyAccountPage();
    myDashboardPage = new this.MyDashboardPage();
    signInPage = new this.SignInPage();
    signUpPage = new this.SignUpPage();
    courseDetailsPage = new this.CourseDetailsPage();
    coursesCollectionPage = new this.CoursesCollectionPage();
    courseEnrollmentPage = new this.CourseEnrollmentPage();

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        globalThis.page = page;
    }
}
module.exports = IndexPage;