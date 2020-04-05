const { resolve } = require('path');
const { readdir, writeFile, readFile } = require('fs').promises;

async function getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(dirents.map((dirent) => {
    const res = resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  }));
  return Array.prototype.concat(...files);
}

module.exports = async function (pathChanged) {
  const componentNameRegex = /routes\/([a-zA-Z]+)\//g
  // check if we are modifying a file in a component directory in a route
  const componentDirectoryMatch = componentNameRegex.exec(pathChanged)
  if (!componentDirectoryMatch || pathChanged.includes('.txt')) return
  const componentDirName = componentDirectoryMatch[1]
  const pathToRoute = pathChanged.split(componentDirName)[0] + componentDirName
  const filesInDocumentationDir = await getFiles(pathToRoute)
  const demoFiles = filesInDocumentationDir.filter(file => file.includes('.demo.svelte'))

  for (const file of demoFiles) {
    const codeText = await readFile(file)
    const filename = file.split('.svelte')[0] + '.txt'
    await writeFile(filename, codeText)
  }
}

