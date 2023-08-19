
const fs = require("fs");
const path = require('path');
const prettier = require('prettier/standalone');
const plugin = require('prettier/parser-typescript');

const generateModelTypes = async () => {
  const modelsPath = path.resolve(__dirname, '../lib/models');
  const files = fs.readdirSync(modelsPath);
  const contents = [];
  for (const file of files) {
    if (file.endsWith('.js') || file.startsWith('index') || file.startsWith('dto')) continue;
    const filePath = path.resolve(modelsPath, file);
    let fileContent = fs.readFileSync(filePath, "utf8");
    fileContent = fileContent.replace(new RegExp(' declare', 'g'), '');
    fileContent = fileContent.split('\n').filter(s => !s.includes('import ')).join('\n');
    contents.push(fileContent);
  }
  const typesCode = `declare module VinesTypes {
    ${contents.join('\n')}
  }`;

  const formatted = prettier.format(typesCode, {
    parser: 'typescript',
    plugins: [plugin],
    tabWidth: 2,
    singleQuote: true,
    printWidth: 200,
    semi: true,
  });

  fs.writeFileSync(path.resolve(__dirname, '../lib/client.d.ts'), formatted);
}

generateModelTypes().catch(console.error);
