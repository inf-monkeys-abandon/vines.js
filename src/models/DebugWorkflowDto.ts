/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DebugWorkflowDto = {
    /**
     * 工作流 task 定义
     */
    tasks: Array<string>;
    /**
     * 启动数据
     */
    inputData?: any;
    /**
     * 工作流输出配置
     */
    output?: Array<string>;
};
