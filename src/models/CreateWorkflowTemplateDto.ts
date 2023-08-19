/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateWorkflowTemplateDto = {
    /**
     * 图标
     */
    logo: string;
    /**
     * 名称
     */
    name: string;
    /**
     * 模板分类
     */
    categoryIds: Array<string>;
    /**
     * 模板 ID
     */
    workflowId: string;
    /**
     * 描述
     */
    desc?: string;
};
