
const fs = require("fs");
const path = require('path');
const prettier = require('prettier/standalone');
const plugin = require('prettier/parser-typescript');

const modify = (code) => {
  code = code.replace(new RegExp(' declare', 'g'), '');
  code = code.split('\n').filter(s => !s.includes('import ')).join('\n');
  return code;
}

const generateModelTypes = async () => {
  const modelsPath = path.resolve(__dirname, '../lib/models');
  const files = fs.readdirSync(modelsPath);
  let contents = [];
  for (const file of files) {
    if (!file.endsWith('.d.ts') || file.startsWith('index')) continue;
    const filePath = path.resolve(modelsPath, file);
    const fileContent = fs.readFileSync(filePath, "utf8");
    contents.push(fileContent);
  }
  const clientOptionsPath = path.resolve(__dirname, '../lib/VinesClientOptions.d.ts');
  const clientOptionsContent = fs.readFileSync(clientOptionsPath, "utf8");
  contents.push(clientOptionsContent);

  const clientPath = path.resolve(__dirname, '../lib/VinesClient.d.ts');
  const clientContent = fs.readFileSync(clientPath, "utf8");
  contents.push(clientContent);
  contents = contents.map(modify);

  const typesCode = `declare module Vines {
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

  const typesFilePath = path.resolve(__dirname, '../lib/all-types.d.ts');
  fs.unwatchFile(typesFilePath);
  fs.writeFileSync(typesFilePath, formatted);
}

generateModelTypes().catch(console.error);
