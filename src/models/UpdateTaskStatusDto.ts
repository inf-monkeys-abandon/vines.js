/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateTaskStatusDto = {
    /**
     * 失败原因
     */
    reasonForIncompletion?: string;
    /**
     * Task 状态
     */
    status?: any;
    /**
     * 输出结果
     */
    outputData?: any;
};
