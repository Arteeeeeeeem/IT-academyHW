const {test, expect} = require("@playwright/test");
const Base = require('../pageObjects/base');
const HomePage = require('../pageObjects/Components/homePage');
const InstallSection = require('../pageObjects/Components/installSection');
const NavBar = require('../pageObjects/Components/navBar');
const SearchMode = require('../pageObjects/Components/searchMode');

const sectionInstallation = 'Installation';
const LogosRoll = 9;
const linkToPython = '/python/docs/intro';
const searchText = 'Playwright'

test.describe('Playwright website tests', () => {
  let base;
  let homePage;
  let installSection;
  let navBar;
  let searchMode;
  test.beforeEach(async ({page}) => {
    base = new Base(page);
    homePage = new HomePage(page);
    installSection = new InstallSection(page);
    navBar = new NavBar(page);
    searchMode = new SearchMode(page);
  });

  test('Part "Chosen by companies and open source projects" should contain 9 logos companies and projects', async ({page}) => {
    await base.navigate('https://playwright.dev/');
    await expect(homePage.homePageCoProjectsLogosRoll).toHaveCount(LogosRoll);
  });

  test('Button "GET STARTED" should leads to the section "Installation"', async ({page}) => {
    await base.navigate('https://playwright.dev/');
    await base.click(homePage.getStartedButton);
    await expect(installSection.getPageTitle).toHaveText(sectionInstallation);
  });

  test('After switch language from "Node.js" to "Python" NavBar should have "Python"', async ({page}) => {
    await base.navigate('https://playwright.dev/');
    await base.hoverOn(navBar.languageDropDownList);
    await base.click(navBar.phytonLanguageButton);
    await expect(navBar.docsButton).toHaveAttribute('href', linkToPython);
  });

  test('First search result should contain request word - "Playwright"', async ({page}) => {
    await base.navigate('https://playwright.dev/');
    await searchMode.searchDoc(navBar.searchButton, searchMode.searchField, searchText);
    await expect(searchMode.firstSearchResult).toContainText(searchText);
  });
})

