/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkflowDefinition } from './WorkflowDefinition';

export type ImportWorkflowDto = {
    /**
     * conductor workflow json 定义
     */
    workflowDef: WorkflowDefinition;
    /**
     * 工作流名称
     */
    name: string;
    /**
     * 工作流描述
     */
    desc?: string;
    /**
     * 工作流 LOGO
     */
    logo?: string;
    /**
     * 表单配置
     */
    variables?: Array<string>;
    /**
     * 触发器配置
     */
    triggers?: Array<string>;
};
