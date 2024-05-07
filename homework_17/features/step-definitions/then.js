const { Then } = require("@wdio/cucumber-framework");

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


Then(/^I should see (\w+) page header$/, async (page) => {
    const header = await pages[page].pageHeader.getText();
    expect(header).toEqual(constants.PAGE_HEADER[page]);
});

Then(/^I should see a (\w+) page title$/, async (page) => {
    expect(await browser.getTitle()).toEqual(pages[page].getPageTitle(page));

});

Then("Every Post has Title", async () => {
    const postsHeader = await BlogPage.postsHeader;
    const postsTitle = await BlogPage.postsTitle;
    const postsDate = await BlogPage.postsDate;

    for(let i = 0; i < postsHeader.length; i++){
        console.log(await postsTitle[i].getText(), await postsDate[i].getText());
        await expect(postsHeader[i]).toHaveChildren(postsTitle[i]);
    }
});

Then("Every Post has Date", async () => {
    const postsHeader = await BlogPage.postsHeader;
    const postsTitle = await BlogPage.postsTitle;
    const postsDate = await BlogPage.postsDate;

    for(let i = 0; i < postsHeader.length; i++){
        console.log(await postsTitle[i].getText(), await postsDate[i].getText());

        await expect(postsHeader[i]).toHaveChildren(postsDate[i]);
    }
});

Then(/^URL should contain "(.*)"$/, async (path) => {
    await browser.refresh();
    const url = await browser.getUrl();
    expect(url).toContain(path);
});




