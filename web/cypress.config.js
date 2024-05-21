const { defineConfig } = require("cypress");

const cucumber = require("cypress-cucumber-preprocessor").default
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: "https://the-internet.herokuapp.com",

    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
      allureWriter(on, config)
    },
    specPattern: "cypress/e2e/features/*.feature",
  },
});
