import { Given, When, Then } from "@wdio/cucumber-framework";

import LoginPage from "../pageobjects/login.page.js";
import HomePage from "../pageobjects/home.page.js";
import NavigationPage from "../pageobjects/navigation.page.js";
import AboutPage from "../pageobjects/about.page.js";

/*Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});*/
Given("I am on the login page", async () => {
    await HomePage.open();
});
Given("I am on the saucelabs page", async () => {
    await AboutPage.open();
});
Then("I am going through saucelabs page", async () => {
    await AboutPage.assertAboutpage();
});
When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password);
});
Then("I should see on Home page", async () => {
    await HomePage.assertHomepage();
    await HomePage.assertHeader();
    await HomePage.assertProduct();
    await HomePage.assertFooter();
    //await HomePage.compareImgTrue();
});
Then("I am going through the footer", async () => {
    await NavigationPage.clickMenu();
    await NavigationPage.assertMenu();
    await NavigationPage.clickMenuInstances();
});
Then("I logout on the saucedemo page", async () => {
    await NavigationPage.clickMenu();
    await NavigationPage.clickLogout();
});
Then("Login blocked", async () => {
    await LoginPage.loginBlocked();
});
/*Then("I should see login {string}", async () => {
    async function (message: string) {
		switch (message) {
            case 'success': {
                await LoginPage.checkMessage(message);
            }
        }
});*/
Then("Login problem User", async () => {
    //await LoginPage.problemUser();
    await HomePage.assertHomepage();
    await HomePage.assertHeader();
    await HomePage.assertProduct();
    await HomePage.assertFooter();
    //await HomePage.compareImg();
});
Then("Login performance glitch User", async () => {
    //await LoginPage.problemUser();
    await HomePage.assertHomepage();
    await HomePage.assertHeader();
    await HomePage.assertProduct();
    await HomePage.assertFooter();
});