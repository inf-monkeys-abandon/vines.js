/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BlockDto = {
    /**
     * Block 类型
     */
    type: BlockDto.type;
    /**
     * Block 唯一标志
     */
    name: string;
    /**
     * Block 显示名称
     */
    displayName: string;
    /**
     * Block 描述信息
     */
    description?: string;
    /**
     * Block 分类
     */
    categories?: Array<string>;
    /**
     * Block 表单配置
     */
    properties: Array<any>;
    /**
     * Block 输出数据
     */
    output?: any;
    /**
     * Block 进行最后一次健康检查的时间
     */
    lastHealthCheckTime?: number;
    /**
     * Block 状态
     */
    blockStatus?: string;
    /**
     * Block 总健康检查次数
     */
    totalCheckCount?: number;
    /**
     * Block 检测可用次数
     */
    availableCount?: number;
    /**
     * Block 可用性
     */
    availability?: number;
    /**
     * Block 预估运行时间，单位为秒
     */
    estimateTime?: number;
};

export namespace BlockDto {

    /**
     * Block 类型
     */
    export enum type {
        SIMPLE = 'SIMPLE',
        FORK_JOIN = 'FORK_JOIN',
        JOIN = 'JOIN',
        DO_WHILE = 'DO_WHILE',
        SWITCH = 'SWITCH',
        DYNAMIC = 'DYNAMIC',
        FORK_JOIN_DYNAMIC = 'FORK_JOIN_DYNAMIC',
        TERMINATE = 'TERMINATE',
        HUMAN = 'HUMAN',
        SUB_WORKFLOW = 'SUB_WORKFLOW',
        INLINE = 'INLINE',
        SET_VARIABLE = 'SET_VARIABLE',
    }


}
