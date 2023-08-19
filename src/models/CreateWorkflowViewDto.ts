/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateWorkflowViewDto = {
    /**
     * 类型
     */
    type: CreateWorkflowViewDto.type;
    /**
     * 图标
     */
    logo: string;
    /**
     * 名称
     */
    name: string;
    /**
     * 是否公开
     */
    isPublic?: boolean;
    /**
     * 代码
     */
    code?: string;
};

export namespace CreateWorkflowViewDto {

    /**
     * 类型
     */
    export enum type {
        API = 'api',
        WEBAPP = 'webapp',
        BOT = 'bot',
    }


}
