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
     * 封面图
     */
    cover?: string;
    /**
     * 模板视图 ID，如果视图是另一个视图的副本则必填
     */
    templateViewId?: string;
    /**
     * 视图使用的 ApiKey，若为内置视图则必填
     */
    apiKey?: string;
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
