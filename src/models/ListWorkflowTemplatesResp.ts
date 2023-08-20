/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkflowTemplateDetailDto } from './WorkflowTemplateDetailDto';

export type ListWorkflowTemplatesResp = {
    /**
     * 当前页数，从 1 开始
     */
    page?: number;
    /**
     * 每页数目，默认为 10
     */
    limit?: number;
    /**
     * 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。
     */
    code: number;
    /**
     * 总数目
     */
    total: number;
    /**
     * 模板详情列表
     */
    data: Array<WorkflowTemplateDetailDto>;
};
