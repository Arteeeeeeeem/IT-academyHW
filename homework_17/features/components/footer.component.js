class FooterComponent {

    get footer(){return $('/*[@id="__docusaurus"]/footer');}
    get footerLogoImg(){return $('/*[@id="__docusaurus"]/footer/div/div[2]/div[1]/a/img');}
    get footerLogoLink(){return $('/*[@id="__docusaurus"]/footer/div/div[2]/div[1]/a');}

}

module.exports = new FooterComponent();