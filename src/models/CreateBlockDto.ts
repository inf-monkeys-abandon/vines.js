/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateBlockCredentialDto } from './CreateBlockCredentialDto';

export type CreateBlockDto = {
    /**
     * Block 显示名称
     */
    displayName: string;
    /**
     * Block 类型
     */
    name: string;
    /**
     * 是否公开
     */
    public?: boolean;
    /**
     * Block 描述
     */
    description?: string;
    /**
     * Block 图标
     */
    icon?: string;
    /**
     * 密钥类型
     */
    credentials?: Array<CreateBlockCredentialDto>;
    /**
     * Block 分类
     */
    categories?: Array<string>;
    /**
     * Block 表单配置
     */
    input?: Array<any>;
    /**
     * Block 输入数据结构
     */
    output?: Array<any>;
};
