const { test } = require('@playwright/test');
const IndexPage = require("../pageModules/IndexPage");

test('test', async ({ page }) => {
  const { homePage, signInPage, signUpPage, coursesCollectionPage, courseDetailsPage, courseEnrollmentPage, myAccountPage, myDashboardPage } = new IndexPage(page);

  await homePage.openHomePageURL();

  await homePage.clickSignInBtn();

  await signInPage.clickSignUpBtn();

  let userDetails = {
    firstName: "xxx",
    lastName: "xxx",
    email: "zwx@zwz.com",
    password: "12345678"
  }
  await signUpPage.fillAndSubmitSignUpForm(userDetails);

  await coursesCollectionPage.verifyUserLogedIn(userDetails.firstName);

  let courseName = "TestProject Java SDK Tutorial";
  await coursesCollectionPage.clickSpecificCourseEnrollmentPageLink(courseName);

  await courseEnrollmentPage.verifyCourseName(courseName);

  await courseEnrollmentPage.clickCourseEnrollBtn();

  await courseDetailsPage.verifyEnrolledCourseName(courseName);
  
  await courseDetailsPage.openCoursesCollectionPage();

  await coursesCollectionPage.clickMyDashboardPageLink();

  await myDashboardPage.verifyWelcomeText(userDetails.firstName);

  await myDashboardPage.verifyEnrolledCourses(courseName);

  await coursesCollectionPage.clickProfileBtn();

  await coursesCollectionPage.clickMyAccountBtn();

  await myAccountPage.verifyUserDetails(userDetails);

  await coursesCollectionPage.clickCoursesCollectionPageLink();

  await coursesCollectionPage.clickProfileBtn();

  await coursesCollectionPage.clickSignOutBtn();
});