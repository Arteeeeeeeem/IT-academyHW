const mainPage = require('../pageobjects/mainPage')
const AdBlock = require('../helpers/adblocks')
const header = require("../pageObjects/components/header");


describe('search tests', function(){

    beforeEach(() => {
        AdBlock.blockSafe()
        AdBlock.blockGoogle()
        mainPage.navigate('https://www.onliner.by/')
    })

    it ('check search `кофе`', ()=>{
        header.search('кофе')
        header.resultOfTheSearch().should('include.text','кофе');
    });

    it ('check search `самокат`', ()=>{
        header.search('самокат');
        header.resultOfTheSearch().should('include.text','самокат');
    });

    it ('check search `кроссовки NIKE`', ()=>{
        header.search('кроссовки NIKE');
        header.resultOfTheSearch().should('include.text','кроссовки NIKE');
    });

    it ('check search `шины`', ()=>{
        header.search('шины');
        header.resultOfTheSearch().should('include.text','шины');
    });

});