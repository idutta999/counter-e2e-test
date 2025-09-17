const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "pybf5a",
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
