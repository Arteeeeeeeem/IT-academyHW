const Page = require("./page");
const constants = require("../constants");

class BlogPage extends Page {

    open () {
        return super.open("blog");
    }
    get postsHeader() {return $$("[itemprop=\"blogPost\"] header");}
    get postsTitle() {return $$("article [itemprop=\"headline\"]");}
    get postsDate() {return $$(".blogPostData_Zg1s time");}

}

module.exports = new BlogPage();