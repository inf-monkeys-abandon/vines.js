/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BlockDefProperties } from './BlockDefProperties';

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
    properties: Array<BlockDefProperties>;
    /**
     * Block 输出数据
     */
    output?: any;
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
    }


}
