/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkflowTemplateDetailDto } from './WorkflowTemplateDetailDto';

export type ListMyTemplatesData = {
    /**
     * 模板详情列表
     */
    created: Array<WorkflowTemplateDetailDto>;
    /**
     * 模板详情列表
     */
    forked: Array<WorkflowTemplateDetailDto>;
};
