/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateWorkflowTriggerDto = {
    /**
     * 触发器类型
     */
    type: UpdateWorkflowTriggerDto.type;
    /**
     * 是否启用
     */
    enabled: boolean;
    /**
     * corn 表达式，SCHEDULER 类型触发器必填
     */
    cron?: string;
    /**
     * Webhook 触发器配置
     */
    webhookConfig?: any;
};

export namespace UpdateWorkflowTriggerDto {

    /**
     * 触发器类型
     */
    export enum type {
        MANUAL = 'MANUAL',
        SCHEDULER = 'SCHEDULER',
        WEBHOOK = 'WEBHOOK',
    }


}
