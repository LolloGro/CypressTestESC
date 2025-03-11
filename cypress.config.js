import { defineConfig } from "cypress";

const PORT = "http://localhost:5080" || process.env.PORT;

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: PORT,
  },
});
