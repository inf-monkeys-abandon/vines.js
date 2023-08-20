export type IJSONValue = string | number | boolean | IJSONObject | IJSONArray;
export type IJSONArray = Array<IJSONValue>;
export interface IJSONObject {
  [x: string]: IJSONValue;
}

export type NodePropertyTypes =
  | 'boolean'
  | 'collection'
  | 'color'
  | 'dateTime'
  | 'fixedCollection'
  | 'hidden'
  | 'json'
  | 'notice'
  | 'multiOptions'
  | 'number'
  | 'options'
  | 'string'
  | 'credentialsSelect'
  | 'resourceLocator'
  | 'curlImport'
  | 'resourceMapper'
  // 代码输入框
  | 'jsCode'
  // 多字段的对象
  | 'multiFieldObject'
  | 'any'
  | 'jsonObject';

export const CODE_LANGUAGES = ['javaScript', 'json', 'python'] as const;
export const CODE_EXECUTION_MODES = ['runOnceForAllItems', 'runOnceForEachItem'] as const;

export type CodeAutocompleteTypes = 'function' | 'functionItem';
export type EditorType = 'code' | 'codeNodeEditor' | 'htmlEditor' | 'sqlEditor' | 'json';
export type CodeNodeEditorLanguage = (typeof CODE_LANGUAGES)[number];
export type CodeExecutionMode = (typeof CODE_EXECUTION_MODES)[number];
export type SQLDialect = 'StandardSQL' | 'PostgreSQL' | 'MySQL' | 'MariaSQL' | 'MSSQL' | 'SQLite' | 'Cassandra' | 'PLSQL';

export interface ResourceMapperTypeOptions {
  resourceMapperMethod: string;
  mode: 'add' | 'update' | 'upsert';
  fieldWords?: { singular: string; plural: string };
  addAllFields?: boolean;
  noFieldsError?: string;
  multiKeyMatch?: boolean;
  supportAutoMap?: boolean;
  matchingFieldsLabels?: {
    title?: string;
    description?: string;
    hint?: string;
  };
}

export type UploadOptions = {
  enabled: boolean;
  limit: number;
  accept: string;
  fileSizeMb?: number;
};

export interface INodePropertyTypeOptions {
  alwaysOpenEditWindow?: boolean; // Supported by: json
  codeAutocomplete?: CodeAutocompleteTypes; // Supported by: string
  editor?: EditorType; // Supported by: string
  editorLanguage?: CodeNodeEditorLanguage; // Supported by: string in combination with editor: codeNodeEditor
  sqlDialect?: SQLDialect; // Supported by: sqlEditor
  maxValue?: number; // Supported by: number
  minValue?: number; // Supported by: number
  multipleValues?: boolean; // Supported by: <All>
  multipleValueButtonText?: string; // Supported when "multipleValues" set to true
  numberPrecision?: number; // Supported by: number
  password?: boolean; // Supported by: string
  rows?: number; // Supported by: string
  showAlpha?: boolean; // Supported by: color
  sortable?: boolean; // Supported when "multipleValues" set to true
  expirable?: boolean; // Supported by: hidden (only in the credentials)
  uploadOptions?: UploadOptions;
  [key: string]: any;
}

export type NodeParameterValue = string | number | boolean | undefined | null;

export type ResourceLocatorModes = 'id' | 'url' | 'list' | string;
export interface IResourceLocatorResult {
  name: string;
  value: string;
  url?: string;
}

export interface INodeParameters {
  [key: string]: NodeParameterValueType;
}
export type NodeParameterValueType =
  // TODO: Later also has to be possible to add multiple ones with the name name. So array has to be possible
  NodeParameterValue | INodeParameters | NodeParameterValue[] | INodeParameters[];

export interface IDisplayOptions {
  hide?: {
    [key: string]: NodeParameterValue[] | undefined;
  };
  show?: {
    [key: string]: NodeParameterValue[] | undefined;
  };
}

export interface INodePropertyOptions {
  name: string;
  value: string | number | boolean;
  action?: string;
  description?: string;
}

export interface INodePropertyCollection {
  displayName: string;
  name: string;
  values: INodeProperties[];
}

export interface INodePropertyValueExtractorBase {
  type: string;
}

export interface INodePropertyValueExtractorRegex extends INodePropertyValueExtractorBase {
  type: 'regex';
  regex: string | RegExp;
}

export type INodePropertyValueExtractor = INodePropertyValueExtractorRegex;

export interface INodeProperties {
  displayName: string;
  name: string;
  type: NodePropertyTypes;
  typeOptions?: INodePropertyTypeOptions;
  default?: NodeParameterValueType;
  description?: string;
  hint?: string;
  displayOptions?: IDisplayOptions;
  options?: Array<INodePropertyOptions | INodeProperties | INodePropertyCollection>;
  placeholder?: string;
  isNodeSetting?: boolean;
  noDataExpression?: boolean;
  required?: boolean;
  example?: string;
  extractValue?: INodePropertyValueExtractor;
}

export interface INodeOutput {
  name: string;
  displayName: string;
  type: NodePropertyTypes;
  description?: string;
}

export type INodeCategory = 'image' | 'llm' | 'progress' | 'im' | 'bio' | 'common';

export enum BlockType {
  SIMPLE = 'SIMPLE',
  FORK_JOIN = 'FORK_JOIN',
  JOIN = 'JOIN',
  DO_WHILE = 'DO_WHILE',
  SWITCH = 'SWITCH',
  DYNAMIC = 'DYNAMIC',
  FORK_JOIN_DYNAMIC = 'FORK_JOIN_DYNAMIC',
  TERMINATE = 'TERMINATE',
  HUMAN = 'HUMAN',
  SUB_WORKFLOW = 'SUB_WORKFLOW',
}

export interface INodeTypeDescription {
  type: BlockType;
  name: string;
  displayName: string;
  description?: string;
  icon?: string;
  properties: INodeProperties[];
  output: INodeOutput[];
  categories?: INodeCategory[];
}