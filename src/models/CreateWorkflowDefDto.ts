/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateWorkflowDefDto = {
    /**
     * conductor workflow json 定义
     */
    workflowDef: any;
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
    hidden?: boolean;
    /**
     * 主工作流 ID
     */
    masterWorkflowId?: string;
    /**
     * workflow 全局变量（非 conductor 能力）
     */
    variables?: Array<string>;
    /**
     * 工作流输出配置
     */
    output?: Array<string>;
};
