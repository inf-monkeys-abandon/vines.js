/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateCredentialTypeDto = {
    /**
     * 换取 token 的脚本
     */
    tokenScript: string;
    /**
     * 显示名称
     */
    displayName: string;
    /**
     * 是否公开
     */
    public?: boolean;
    /**
     * 密钥类型
     */
    type?: string;
    /**
     * LOGO
     */
    logo?: string;
    /**
     * Block 表单配置
     */
    properties?: Array<any>;
    /**
     * 测试连通性的脚本
     */
    testConnectionScript?: string;
};
