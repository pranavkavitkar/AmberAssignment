const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromewebsecurity: false,
  video: true,
  watchForFileChanges: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  env: {
    MAILOSAUR_API_KEY: "aDGRhD973zHnhf8w",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
