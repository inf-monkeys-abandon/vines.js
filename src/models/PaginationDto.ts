/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PaginationDto = {
    /**
     * 当前页数，从 1 开始
     */
    page?: number;
    /**
     * 每页数目，默认为 10
     */
    limit?: number;
};
