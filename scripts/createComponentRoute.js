const { mkdirSync, writeFileSync } = require("fs");
const path = require("path");
const navConfig = require("../docs/src/nav.config.json");
const prompts = require("prompts");
const { kebabCase, camelCase, startCase } = require("lodash");

const rootDir = path.join(__dirname, "..");

const sectionChoices = navConfig.map(section => {
  return {
    title: section.name,
    value: section.name
  };
});

const questions = [
  {
    type: "text",
    name: "componentName",
    message: "What is the component's name?",
    validate: value => !!value || "You must enter a component name"
  },
  {
    type: "multiselect",
    name: "sectionAnswer",
    message: "Pick a section",
    choices: sectionChoices,
    hint: "- Space to select. Return to submit",
    instructions: false,
    min: 1,
    max: 1
  }
];

const createComponentFiles = (folder, component) => {
  // Add component folder
  mkdirSync(`${rootDir}/src/components/${folder}`);

  // Add [Component.svelte] file
  const template = `<h1>This is the ${component} component</h1>

<script>
// ...
</script>

<style lang="less" global>
  @import "style/index.less";
</style>
  `;
  writeFileSync(
    `${rootDir}/src/components/${folder}/${component}.svelte`,
    template
  );

  // Add style and empty index.less file
  mkdirSync(`${rootDir}/src/components/${folder}/style`);
  writeFileSync(`${rootDir}/src/components/${folder}/style/index.less`, "");
};

const createDocumentationFiles = (folder, component, navSection) => {
  // Add component to route config
  const navConfigCopy = [...navConfig];
  const relevantSection = navConfigCopy.find(
    section => section.name === navSection
  );
  relevantSection.children.push(folder);
  writeFileSync(
    `${rootDir}/docs/src/nav.config.json`,
    JSON.stringify(navConfigCopy, null, 2)
  );

  // Make route folder
  const routeDir = `${rootDir}/docs/src/routes/${folder}`;
  mkdirSync(routeDir);

  // Make index.svelte
  const indexTemplate = `<div class="markdown api-container">
  <${component} />
</div>

<script>
  import ${component} from "./demo.md";
</script>
`;

  writeFileSync(`${routeDir}/index.svelte`, indexTemplate);

  // Make demo.md
  const docTemplate = `# ${startCase(component)}

## Example Basic Usage

<div id="components-${folder}-demo-basic">
  <Basic />
</div>
<Prism language="svelte" source="{BasicCode}"/>

## API

<DocsTable {...attributesData}/>

<script>
  import Prism from 'docs/src/components/prism/Prism.svelte'

  import Basic from './demos/basic.demo.svelte'
  import BasicCode from './demos/basic.demo.txt'

  import DocsTable from 'docs/src/components/DocsTable.svelte'
  const attributesData = {
    title: 'Attributes',
    columns: ['Property', 'Description', 'Type', 'Default'],
    data: [
      {
        property: 'test',
        description: 'test description',
        type: 'String',
        default: 'test'
      }
    ]
  }
</script>
  `;

  writeFileSync(`${routeDir}/demo.md`, docTemplate);

  // make demos directory and example
  mkdirSync(`${routeDir}/demos`);

  const demoTemplate = `<${component} />

<script>
  import ${component} from "@/components/${folder}/${component}.svelte";
</script>
  `;
  writeFileSync(`${routeDir}/demos/basic.demo.svelte`, demoTemplate);
};

(async () => {
  const response = await prompts(questions);
  const { componentName, sectionAnswer } = response;

  const kebabCasedName = kebabCase(componentName);
  const camelCasedName = camelCase(componentName);
  const pascalCasedName =
    camelCasedName[0].toUpperCase() + camelCasedName.slice(1);

  createComponentFiles(kebabCasedName, pascalCasedName);
  createDocumentationFiles(kebabCasedName, pascalCasedName, sectionAnswer[0]);
})();
