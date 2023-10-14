/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateWorkflowTriggerDto = {
    /**
     * 触发器类型
     */
    triggerType: UpdateWorkflowTriggerDto.triggerType;
    /**
     * corn 表达式，SCHEDULER 类型触发器必填
     */
    cron?: string;
};

export namespace UpdateWorkflowTriggerDto {

    /**
     * 触发器类型
     */
    export enum triggerType {
        MANUAL = 'MANUAL',
        SCHEDULER = 'SCHEDULER',
    }


}
