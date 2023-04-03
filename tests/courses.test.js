const { test } = require('@playwright/test');
const HomePage = require("../pageModules/HomePage");
const MyAccountPage = require("../pageModules/MyAccountPage");
const MyDashboardPage = require("../pageModules/MyDashboardPage");
const SignInPage = require("../pageModules/SignInPage");
const SignUpPage = require("../pageModules/SignUpPage");
const CourseDetailsPage = require("../pageModules/CourseDetailsPage");
const CoursesCollectionPage = require("../pageModules/CoursesCollectionPage");
const CourseEnrollmentPage = require("../pageModules/CourseEnrollMentPage");

test('test', async ({ page }) => {
  const homePage = new HomePage(page);
  const myAccountPage = new MyAccountPage(page);
  const myDashboardPage = new MyDashboardPage(page);
  const signInPage = new SignInPage(page);
  const signUpPage = new SignUpPage(page);
  const courseDetailsPage = new CourseDetailsPage(page);
  const coursesCollectionPage = new CoursesCollectionPage(page);
  const courseEnrollmentPage = new CourseEnrollmentPage(page);

  await homePage.openHomePageURL();

  await homePage.clickSignInBtn();

  await signInPage.clickSignUpBtn();

  let userDetails = {
    firstName: "xxx",
    lastName: "xxx",
    email: "zww@wwz.com",
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