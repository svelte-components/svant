const path = require('path')
const less = require('less')
const csso = require('csso')
const fs = require('fs')

module.exports = async function () {
  return less.render("@import './index';", {
    javascriptEnabled: true,
    filename: path.join(__dirname, '../src/theme/main.less')
  })
    .then(function(output) {
        const css = csso.minify(output.css).css
        fs.writeFileSync(path.join(__dirname, '../static/compiled.css'), css)
    },
    function(error) {
      console.error(error)
    });
}
