const Page = require('./page');

class GettingStartedPage extends Page {

    open () {
        return super.open('blog');
    }
    get postsHeader() {return $$('[itemprop="blogPost"] header');}
    get postsTitle() {return $$('article [itemprop="headline"]');}
    get postsDate() {return $$('.blogPostData_Zg1s time');}

}

module.exports = new GettingStartedPage();