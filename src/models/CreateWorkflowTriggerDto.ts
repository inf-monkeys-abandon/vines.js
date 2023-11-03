/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateWorkflowTriggerDto = {
    /**
     * 触发器类型
     */
    triggerType: CreateWorkflowTriggerDto.triggerType;
    /**
     * corn 表达式，SCHEDULER 类型触发器必填
     */
    cron?: string;
    /**
     * 是否启用
     */
    enabled: boolean;
};

export namespace CreateWorkflowTriggerDto {

    /**
     * 触发器类型
     */
    export enum triggerType {
        MANUAL = 'MANUAL',
        SCHEDULER = 'SCHEDULER',
    }


}
