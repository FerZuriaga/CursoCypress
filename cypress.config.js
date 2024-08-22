const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin

//const cucumber = require('@bahmutov/cypress-esbuild-preprocessor').default;

//const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: "https://demoqa.com/",
        chromeWebSecurity: false,

        setupNodeEvents(on, config) {
        //    on('file:preprocessor', cucumber())
        },
        specPattern: "cypress/e2e/*.feature",


          async setupNodeEvents(on, config) {
            const bundler = createBundler({
              plugins: [createEsbuildPlugin(config)],
            });

            on('file:preprocessor', bundler);

            await addCucumberPreprocessorPlugin(on, config);

            return config;
          },
          specPattern: 'cypress/e2e/**/*.feature',
          supportFile: false,
          stepDefinitions: [
            'cypress/e2e/Cucumber2/**/*.{js,mjs,ts,tsx}',
            'cypress/support/step_definitions/**/*.{js,mjs,ts,tsx}'
          ]
    }
});
