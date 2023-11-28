/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateWorkflowDefDto = {
    /**
     * 工作流名称
     */
    name?: string;
    /**
     * 工作流描述
     */
    desc?: string;
    /**
     * 工作流 LOGO
     */
    logo?: string;
    /**
     * 工作流是否激活
     */
    active?: boolean;
    /**
     * conductor workflow json 定义
     */
    workflowDef?: any;
    /**
     * workflow 全局变量（非 conductor 能力）
     */
    variables?: Array<string>;
};
