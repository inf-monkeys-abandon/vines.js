/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SearchWorkflowExecutionsOrderDto = {
    /**
     * 排序的字段
     */
    field: SearchWorkflowExecutionsOrderDto.field;
    /**
     * 排序的字段
     */
    order: SearchWorkflowExecutionsOrderDto.order;
};

export namespace SearchWorkflowExecutionsOrderDto {

    /**
     * 排序的字段
     */
    export enum field {
        START_TIME = 'startTime',
        END_TIME = 'endTime',
        WORKFLOW_ID = 'workflowId',
        WORKFLOW_TYPE = 'workflowType',
        STATUS = 'status',
    }

    /**
     * 排序的字段
     */
    export enum order {
        DESC = 'DESC',
        ASC = 'ASC',
    }


}
