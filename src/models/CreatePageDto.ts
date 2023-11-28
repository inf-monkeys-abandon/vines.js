/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreatePageDto = {
    /**
     * 类型
     */
    type: CreatePageDto.type;
    /**
     * 权限
     */
    permissions: Array<'read' | 'write' | 'exec' | 'permission'>;
    /**
     * 页面名称
     */
    displayName: string;
    /**
     * 序号（越小越靠前）
     */
    sortIndex: string;
    /**
     * 自定义配置项
     */
    customOptions: any;
};

export namespace CreatePageDto {

    /**
     * 类型
     */
    export enum type {
        PROCESS = 'process',
        LOG = 'log',
        CHAT = 'chat',
        PREVIEW = 'preview',
        API = 'api',
    }


}
