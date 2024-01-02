/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateNewVersionWorkflowDefDto = {
    /**
     * 工作流版本
     */
    version: number;
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
     * conductor workflow json 定义
     */
    workflowDef?: any;
    /**
     * workflow 全局变量（非 conductor 能力）
     */
    variables?: Array<string>;
    /**
     * 工作流输出配置
     */
    output?: Array<string>;
};
