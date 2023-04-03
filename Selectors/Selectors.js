module.exports = {
    homePageURL: "https://courses.ultimateqa.com",
    links: function(value) {
        return "a[href='"+value+"']";
    },
    userInputFields: function(value) {
        return "input[name='user["+value+"]']";
    },
    checkBox: "input[type='checkbox']",
    submitBtn: "button[type='submit']",
    profileMenuBtn: "button[aria-label='Toggle menu']",
    courseNameWithSpecificHeader: function(header, courseName) {
        return "//"+header+"[contains(text(),'"+courseName+"')]";
    },
    courseEnrollLink: "a[data-qa='enroll-free__btn']",
    courseNameSelectorh2: "article header h2",
    headerH1: "//h1",
    enrolledCourseSelector: "div a h3",
    collectionPageURL: "https://courses.ultimateqa.com/collections"
};