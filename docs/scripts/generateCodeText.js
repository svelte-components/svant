const { resolve } = require("path");
const { readdir, writeFile, readFile } = require("fs").promises;
const path = require("path");
const routesPath = path.join(__dirname, "../src/routes");

async function getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = resolve(dir, dirent.name);
      return dirent.isDirectory() ? getFiles(res) : res;
    })
  );
  return Array.prototype.concat(...files);
}

const getDirectories = async (source) => {
  const directories = await readdir(source, { withFileTypes: true });
  return directories
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
};

async function generateTextFiles(component) {
  const pathToRoute = `${routesPath}/${component}`;
  const filesInDocumentationDir = await getFiles(pathToRoute);
  const demoFiles = filesInDocumentationDir.filter((file) =>
    file.includes(".demo.svelte")
  );

  for (const file of demoFiles) {
    const codeText = await readFile(file);
    const filename = file.split(".svelte")[0] + ".txt";
    await writeFile(filename, codeText);
  }
}

module.exports.generateAll = async function () {
  const directories = await getDirectories(routesPath);
  for (const dir of directories) {
    await generateTextFiles(dir);
  }
};

module.exports.generateFromPath = async function (pathChanged) {
  const componentNameRegex = /routes\/([a-zA-Z]+)\//g;
  // check if we are modifying a file in a component directory in a route
  const componentDirectoryMatch = componentNameRegex.exec(pathChanged);
  if (!componentDirectoryMatch || pathChanged.includes(".txt")) return;
  const componentDirName = componentDirectoryMatch[1];
  generateTextFiles(componentDirName);
};

if (process.argv[2] === "run") {
  (async function () {
    await module.exports.generateAll();
  })();
}
