/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type StartWorkflowDto = {
    /**
     * 工作流版本，默认为最新版本
     */
    version?: number;
    /**
     * 启动数据
     */
    inputData?: any;
    /**
     * 对应的 chat session 会话 id
     */
    chatSessionId?: string;
    /**
     * 是否等待工作流执行完成之后再返回
     */
    waitForWorkflowFinished?: boolean;
};
