const path = require("path");
const less = require("less");
const csso = require("csso");
const fs = require("fs");

(async function() {
  less
    .render(
      "@import './themes/index';\n@import './core/index';\n@import './components/main';",
      {
        javascriptEnabled: true,
        filename: path.join(__dirname, "../src/style/index.less")
      }
    )
    .then(
      function(output) {
        const css = csso.minify(output.css).css;
        fs.writeFileSync(path.join(__dirname, "../docs/static/svant.css"), css);
      },
      function(error) {
        console.error(error);
        process.exit(1);
      }
    )
    .then(() => {
      // compile the docs theme
      return less.render("@import './index';", {
        javascriptEnabled: true,
        filename: path.join(__dirname, "../docs/src/theme/entry.less")
      });
    })
    .then(
      function(output) {
        const css = csso.minify(output.css).css;
        fs.writeFileSync(path.join(__dirname, "../docs/static/docs.css"), css);
      },
      function(error) {
        console.error(error);
        process.exit(1);
      }
    );
})();
