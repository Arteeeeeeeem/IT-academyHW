class Footer {
    footerBarButton(text) {
        return cy.xpath(`//*[starts-with(@class, "footer-style__link") and normalize-space(text())=normalize-space("${text}")]`)
    }

    linksFooterBar(text) {
        return this.footerBarButton(text).click()
    }

}

module.exports = new Footer()