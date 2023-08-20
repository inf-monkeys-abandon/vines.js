/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkflowTemplateCategory } from './WorkflowTemplateCategory';

export type ListWorkflowTemplatesCategoriesResp = {
    /**
     * 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。
     */
    code: number;
    /**
     * 描述信息
     */
    message: string;
    /**
     * 模板分类列表
     */
    data: Array<WorkflowTemplateCategory>;
};
