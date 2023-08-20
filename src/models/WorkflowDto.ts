/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { INodeProperties } from './INodeProperties';
import type { WorkflowDefinition } from './WorkflowDefinition';

export type WorkflowDto = {
    /**
     * ID
     */
    _id: string;
    /**
     * 创建时间（时间戳）
     */
    createdTimestamp: number;
    /**
     * 更新时间（时间戳）
     */
    updatedTimestamp: number;
    /**
     * 是否被删除
     */
    isDeleted?: boolean;
    /**
     * 名称
     */
    name: string;
    /**
     * 描述
     */
    desc?: string;
    /**
     * 图标
     */
    logo?: string;
    /**
     * 是否激活
     */
    active: boolean;
    /**
     * 创建者用户 ID
     */
    creatorUserId: string;
    /**
     * 团队 ID
     */
    teamId: string;
    /**
     * pointCost
     */
    pointCost?: number;
    /**
     * 工作流定义
     */
    workflowDef: WorkflowDefinition;
    /**
     * 变量
     */
    variables?: Array<INodeProperties>;
    /**
     * 从其派生的流程 ID
     */
    forkFromId?: string;
    /**
     * 是否隐藏
     */
    hidden?: boolean;
    /**
     * 主工作流 ID
     */
    masterWorkflowId?: string;
};
