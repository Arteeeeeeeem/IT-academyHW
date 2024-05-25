const { defineConfig } = require('cypress')
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/{api,e2e}/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      allureCypress(on);
    },
  },
  viewportWidth: 1920,
  viewportHeight: 1280,
  defaultCommandTimeout: 10000,
  execTimeout: 60000,
  numTestsKeptInMemory: 0,
  chromeWebSecurity: false,
  chromeArgs: ['--disable-extensions'],
  video: false,
  retries: {
    runMode: 2,
  },
})