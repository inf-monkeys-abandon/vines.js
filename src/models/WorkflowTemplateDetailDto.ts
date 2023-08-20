/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserInfoDto } from './UserInfoDto';
import type { WorkflowDto } from './WorkflowDto';

export type WorkflowTemplateDetailDto = {
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
     * 模板名称
     */
    name: string;
    /**
     * 模板描述
     */
    desc?: string;
    /**
     * 模板图标
     */
    logo?: string;
    /**
     * 团队 id
     */
    teamId: string;
    /**
     * 模板对应 workflowId
     */
    workflowId: string;
    /**
     * 模板创建者 userId
     */
    creatorUserId: string;
    /**
     * 模板分类（workflowCategory Ids）
     */
    categoryIds: Array<string>;
    /**
     * 模板克隆次数
     */
    fetchCount?: number;
    /**
     * 用户信息
     */
    user?: UserInfoDto;
    /**
     * 对应工作流
     */
    workflow?: WorkflowDto;
};
