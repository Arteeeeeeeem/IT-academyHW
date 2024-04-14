const BlogPage = require('../pageobjects/blog.page');
const constants = require('../../constants');


describe('Blog page tests', () => {
    before('Open Blog page', async () => {
        browser.maximizeWindow();
        await BlogPage.open();
    });

    it(`Blog page has title ${constants.BLOG_PAGE_TITLE}`, async () => {
        const title = await browser.getTitle();

        expect(title).toEqual(constants.BLOG_PAGE_TITLE);
    });

    it('Every Post has Title and Date', async () => {
        const postsHeader = await BlogPage.postsHeader;
        const postsTitle = await BlogPage.postsTitle;
        const postsDate = await BlogPage.postsDate;

        for(let i = 0; i < postsHeader.length; i++){
            console.log(await postsTitle[i].getText(), await postsDate[i].getText());

            await expect(postsHeader[i]).toHaveChildren(postsTitle[i]);
            await expect(postsHeader[i]).toHaveChildren(postsDate[i]);
        }
    });

    it('Blog Page does not have breadcrumbs', async () => {
        const breadcrumbLinks = await BlogPage.breadcrumbsLinks;

        await expect(breadcrumbLinks.length).toEqual(0);
    });
});