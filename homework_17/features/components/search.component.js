class SearchComponent {

    get btnSearch() {return $('/*[@id="__docusaurus"]/nav/div[1]/div[2]/div[3]/button');}
    get inputSearch() {return $('/*[@id="__docusaurus"]/nav/div[1]/div[2]/div[3]/button/span[1]/span');}

}

module.exports = new SearchComponent();