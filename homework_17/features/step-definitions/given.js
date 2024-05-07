const { Given } = require("@wdio/cucumber-framework");

const HomePage = require("../pageobjects/home.page");
const BlogPage = require("../pageobjects/blog.page");
const GettingStartedPage = require("../pageobjects/gettingStarted.page");
const ContributePage = require("../pageobjects/contribute.page");
const CommunityPage = require("../pageobjects/community.page");

const pages = {
    home: HomePage,
    blog: BlogPage,
    gettingStarted: GettingStartedPage,
    contribute: ContributePage,
    community: CommunityPage
};


Given(/^I am on the (\w+) page$/ , async (page) => {
    await pages[page].open();
});






