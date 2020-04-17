// Adding this for Webstrom to resolve aliases
const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/")
    }
  }
};
