/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateBlockResp = {
    /**
     * 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。
     */
    code: number;
    /**
     * 描述信息
     */
    message: string;
    /**
     * block id
     */
    data: string;
};
