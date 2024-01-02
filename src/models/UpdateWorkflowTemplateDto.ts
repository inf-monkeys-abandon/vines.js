/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateWorkflowTemplateDto = {
    /**
     * 模板分类
     */
    categoryIds?: Array<string>;
    /**
     * 名称
     */
    name?: string;
    /**
     * 工作流版本
     */
    workflowVersion: number;
    /**
     * 描述
     */
    desc?: string;
    /**
     * 图标
     */
    logo?: string;
    /**
     * 资产分享策略
     */
    assetsPolicy?: any;
};
