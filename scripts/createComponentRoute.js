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
  const template = `<div class="ant-${folder}">This is the ${component} component</div>

<script>
// ...
</script>
  `;
  writeFileSync(
    `${rootDir}/src/components/${folder}/${component}.svelte`,
    template
  );

  // Add style and empty index.less file
  mkdirSync(`${rootDir}/src/style/components/${folder}`);
  writeFileSync(
    `${rootDir}/src/style/components/${folder}/index.less`,
    "// You need to import this file in src/style/index.less"
  );

  // Add test file
  const testFileContent = `import ${component} from "../${component}.svelte";
  import { render } from "@/components/_util/testHelpers";

describe("${component} component", () => {
  test("should render", () => {
    const { container } = render(${component});
    expect(container.innerHTML).toContain("ant-${folder}")
  });
});
  `;

  mkdirSync(`${rootDir}/src/components/${folder}/__tests__`);
  writeFileSync(
    `${rootDir}/src/components/${folder}/__tests__/${component}.spec.js`,
    testFileContent
  );
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
  const indexTemplate = `<svelte:head>
  <title>${component}</title>
</svelte:head>
<div class="markdown api-container">
  <${component} />
</div>

<script>
  import ${component} from "./demo.md";
</script>
`;

  writeFileSync(`${routeDir}/index.svelte`, indexTemplate);

  // Make demo.md
  const docTemplate = `# ${startCase(component)}

Description of the ${component}'s function.

## Examples

<Example
  id="${folder}-demo-basic"
  title="Basic"
  demoComponent="{Basic}"
  demoCode="{BasicCode}">
  <p slot="description">
    Basic description of the ${component} component goes here
  </p>
</Example>

## API

<DocsTable {...attributesData}/>

<script>
  import Example from 'docs/src/components/Example.svelte';

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
  import { ${component} } from "svant";
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

  console.log(
    `${pascalCasedName} component created. Remember to add it to src/components/index.js so that users can treeshake it!`
  );
})();
