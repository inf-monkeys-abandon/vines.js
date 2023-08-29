/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateWorkflowViewDto = {
    /**
     * 名称
     */
    name?: string;
    /**
     * 图标
     */
    logo?: string;
    /**
     * 类型
     */
    type?: UpdateWorkflowViewDto.type;
    /**
     * 是否公开
     */
    isPublic?: boolean;
    /**
     * 代码
     */
    code?: string;
    /**
     * 是否启用
     */
    enabled?: boolean;
};

export namespace UpdateWorkflowViewDto {

    /**
     * 类型
     */
    export enum type {
        API = 'api',
        WEBAPP = 'webapp',
        BOT = 'bot',
    }


}
