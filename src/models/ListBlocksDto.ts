/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListBlocksDto = {
    /**
     * 关键词
     */
    keywords?: string;
    /**
     * 页码
     */
    page?: number;
    /**
     * 每页数量
     */
    limit?: number;
    /**
     * 其他字段
     */
    extra?: Array<'assets' | 'usability' | 'meta'>;
};
