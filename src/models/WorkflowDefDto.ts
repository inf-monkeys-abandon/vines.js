import { BlockType } from "./BlockDefDto";

export type TaskDefinition = {
  name: string;
  retryCount: number;
  timeoutSeconds: number;
  inputKeys: string[];
  outputKeys: string[];
  timeoutPolicy?: string;
  retryLogic?: string;
  retryDelaySeconds?: number;
  responseTimeoutSeconds?: number;
  concurrentExecLimit?: number;
  rateLimitFrequencyInSeconds?: number;
  rateLimitPerFrequency?: number;
  ownerEmail: string;
};

export interface Credential {
  type: string;
  id: string;
}

export interface InputParametersType {
  /**
   * block 类型，需要依赖此数据作为 HTTP URL、参数传递的依据
   */
  __customBlockName?: string;

  /**
   * 对应的 credential
   */
  credential?: Credential;

  /**
   * 具体的请求数据
   */
  [x: string]: any;
}

export type WorkflowTaskDefinition = {
  name: string;
  taskReferenceName: string;
  type: BlockType;
  inputParameters: InputParametersType;
  startDelay?: number;
  optional?: boolean;
  subWorkflowParam?: {
    name: string;
    version: number;
  };
  subWorkflowDef?: Partial<WorkflowDefinition>;
  loopCondition?: string;
  loopOver?: WorkflowTaskDefinition[];
};

export interface WorkflowDefinition {
  name: string;
  description: string;
  version: number;
  tasks: WorkflowTaskDefinition[];
  failureWorkflow: string;
  restartable: boolean;
  workflowStatusListenerEnabled: boolean;
  schemaVersion: number;
  ownerEmail: string;
  timeoutPolicy: string;
  timeoutSeconds: number;
}

export enum TaskStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  FAILED = 'FAILED',
  FAILED_WITH_TERMINAL_ERROR = 'FAILED_WITH_TERMINAL_ERROR',
  COMPLETED = 'COMPLETED',
}

export type TaskBody = {
  workflowInstanceId: string;
  taskId: string;
  reasonForIncompletion?: string;
  callbackAfterSeconds?: number;
  status: TaskStatus;
  outputData?: any;
};

export type TaskData = {
  taskType: string;
  status: string;
  inputData: any;
  referenceTaskName: string;
  retryCount: number;
  seq: number;
  pollCount: number;
  taskDefName: string;
  scheduledTime: number;
  startTime: number;
  endTime: number;
  updateTime: number;
  startDelayInSeconds: number;
  retried: boolean;
  executed: boolean;
  callbackFromWorker: boolean;
  responseTimeoutSeconds: number;
  workflowInstanceId: string;
  workflowType: string;
  taskId: string;
  callbackAfterSeconds: number;
  outputData: any;
  workflowTask: {
    name: string;
    taskReferenceName: string;
    type: string;
    inputParameters: any;
    startDelay: number;
    optional: boolean;
    taskDefinition: TaskDefinition;
  };
  rateLimitPerFrequency: number;
  rateLimitFrequencyInSeconds: number;
  taskDefinition: any;
  taskStatus: string;
  queueWaitTime: number;
  logs: [string];
};
