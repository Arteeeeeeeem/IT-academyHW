class FooterComponent {

    get footer(){return $('[class="footer footer--dark"]');}
    get footerLogoImg(){return $('.footer__logo');}
    get footerLogoLink(){return $('.footerLogoLink_RC3H');}

}

module.exports = new FooterComponent();