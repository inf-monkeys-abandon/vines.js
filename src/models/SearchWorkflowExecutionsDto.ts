/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaginationDto } from './PaginationDto';
import type { SearchWorkflowExecutionsOrderDto } from './SearchWorkflowExecutionsOrderDto';

export type SearchWorkflowExecutionsDto = {
    /**
     * 模糊查询
     */
    freeText?: string;
    /**
     * 根据 workflow ID 进行筛选
     */
    workflowId?: string;
    /**
     * 根据创建用户 ID 进行筛选
     */
    creatorUserId?: string;
    /**
     * 工作流状态
     */
    status?: Array<'RUNNING' | 'COMPLETED' | 'FAILED' | 'TIMED_OUT' | 'TERMINATED' | 'PAUSED'>;
    /**
     * 启动工作流的用户 ID，支持同时传多个用户
     */
    startBy?: Array<string>;
    /**
     * 执行开始时间（毫秒时间戳）
     */
    startTimeFrom?: number;
    /**
     * 执行结束时间（毫秒时间戳）
     */
    startTimeTo?: number;
    /**
     * 分页配置
     */
    pagination?: PaginationDto;
    /**
     * 按照时间排序规则
     */
    orderBy?: SearchWorkflowExecutionsOrderDto;
};
