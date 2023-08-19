
const fs = require('fs');
const path = require('path');
const prettier = require('prettier/standalone');
const plugin = require('prettier/parser-typescript');

const modify = (code) => {
  code = code.replace(new RegExp(' declare', 'g'), '');
  return code.split('\n').filter((s) => !s.includes('import ')).join('\n');
};

const readFileSyncAndModify = (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return modify(fileContent);
};

const generateModelTypes = async () => {
  const modelsPath = path.resolve(__dirname, '../lib/models');
  const files = fs.readdirSync(modelsPath).filter((file) => file.endsWith('.d.ts') && !file.startsWith('index'));
  const contents = files.map((file) => readFileSyncAndModify(path.resolve(modelsPath, file)));
  const clientOptionsPath = path.resolve(__dirname, '../lib/VinesClientOptions.d.ts');
  const clientPath = path.resolve(__dirname, '../lib/VinesClient.d.ts');
  contents.push('export type RequestConfig = Record<string, any>;');
  contents.push(readFileSyncAndModify(clientOptionsPath), readFileSyncAndModify(clientPath));
  const typesCode = `declare namespace Vines {
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
  fs.writeFileSync(typesFilePath, formatted);
};

generateModelTypes().catch(console.error);