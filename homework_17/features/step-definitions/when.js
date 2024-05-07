const { When } = require("@wdio/cucumber-framework");

const HomePage = require("../pageobjects/home.page");
const BlogPage = require("../pageobjects/blog.page");
const GettingStartedPage = require("../pageobjects/gettingStarted.page");
const ContributePage = require("../pageobjects/contribute.page");
const CommunityPage = require("../pageobjects/community.page");
const NavigationComponent = require("../components/navigation.component");
const SearchComponent = require("../components/search.component");

const constants = require("../../constants");


const pages = {
    home: HomePage,
    blog: BlogPage,
    gettingStarted: GettingStartedPage,
    contribute: ContributePage,
    community: CommunityPage
};


When(/^I go to the (\w+) page$/, async (page) => {
    await pages[page].open();
});

When(/^I click "(.*)" menu link$/, async (menuItem) => {
    await browser.maximizeWindow();
    await NavigationComponent.visitMenuLink(menuItem);
});

When(/^I enter "(.*)" into the search bar$/, async (keyword) => {
    await SearchComponent.btnSearch.waitForDisplayed(5000);
    await SearchComponent.btnSearch.click();
    await SearchComponent.inputSearch.waitForDisplayed(5000);
    await browser.keys(keyword);
    await browser.pause(500);
    // await browser.keys("Enter");
});

When(/^I press key "(.*)"$/, async (key) => {
    await browser.keys(key);
    await browser.pause(2000);
});





