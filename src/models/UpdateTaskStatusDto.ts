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
    status?: UpdateTaskStatusDto.status;
    /**
     * 输出结果
     */
    outputData?: any;
};

export namespace UpdateTaskStatusDto {

    /**
     * Task 状态
     */
    export enum status {
        IN_PROGRESS = 'IN_PROGRESS',
        FAILED = 'FAILED',
        FAILED_WITH_TERMINAL_ERROR = 'FAILED_WITH_TERMINAL_ERROR',
        COMPLETED = 'COMPLETED',
    }


}
