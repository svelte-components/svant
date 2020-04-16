const fs = require("fs");
const path = require("path");
const lodash = require("lodash");
const allIconDefs = require("@ant-design/icons-svg");
const util = require("util");

const promisify = util.promisify;
const template = lodash.template;
const { exec } = require("child_process");

const writeFile = promisify(fs.writeFile);

function walk(fn) {
  return Promise.all(
    Object.keys(allIconDefs).map(svgIdentifier => {
      const iconDef = allIconDefs[svgIdentifier];

      return fn({ svgIdentifier, ...iconDef });
    })
  );
}

async function generateIcons() {
  const iconsDir = path.join(__dirname, "../src/components/icons");
  try {
    await promisify(fs.access)(iconsDir);
  } catch (err) {
    await promisify(fs.mkdir)(iconsDir);
  }

  const render = template(
    `
<Icon {...props} on:click="{(e) => dispatch('click', e)}"/>
<script>
// GENERATE BY scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY
import Icon from '@/components/icons/base/Icon.svelte';
import <%= svgIdentifier %>Svg from '@ant-design/icons-svg/lib/asn/<%= svgIdentifier %>';
import {createEventDispatcher} from 'svelte'
const dispatch = createEventDispatcher();

// icon props
export let spin = false
export let rotate = false
export let style = ''
<% if (theme === "twotone") {%>
export let twoToneColor = null
<% } %>
// SVG props
export let width = null
export let height = null
export let fill = null

let className = '';

export { className as class };

<% if (theme === "twotone") {%>
$: props = {
    icon:<%= svgIdentifier %>Svg,
    spin,
    rotate,
    style,
    class: className,
    twoToneColor,
    width,
    height,
    fill
}
<% } else { %>
$: props = {
    icon:<%= svgIdentifier %>Svg,
    spin,
    rotate,
    style,
    class: className,
    width,
    height,
    fill
}
<% } %>
</script>
`.trim()
  );

  await walk(async ({ svgIdentifier, name, theme }) => {
    // generate icon file
    await writeFile(
      path.resolve(
        __dirname,
        `../src/components/icons/${svgIdentifier}.svelte`
      ),
      render({ svgIdentifier, name, theme })
    );
  });

  // generate icon index
  const entryText = Object.keys(allIconDefs)
    .sort()
    .map(svgIdentifier => {
      return `export { default as ${svgIdentifier} } from './${svgIdentifier}.svelte';`;
    })
    .join("\n");

  await writeFile(
    path.resolve(__dirname, "../src/components/icons/index.js"),
    `
// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY
${entryText}
    `.trim()
  );
}

generateIcons();
exec("prettier --write \"src/components/icons/*.svelte\"", (error) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
});
