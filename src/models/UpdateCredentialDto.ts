/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateCredentialDto = {
    /**
     * 密钥名称
     */
    displayName?: string;
    /**
     * 密钥数据，服务器将会加密存储
     */
    data: any;
};
