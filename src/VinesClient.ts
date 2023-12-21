/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateWorkflowDefDto } from './models/CreateWorkflowDefDto';
import type { CreateWorkflowTriggerDto } from './models/CreateWorkflowTriggerDto';
import type { ImportWorkflowDto } from './models/ImportWorkflowDto';
import type { RetryFromFailedTaskDto } from './models/RetryFromFailedTaskDto';
import type { SearchWorkflowExecutionsDto } from './models/SearchWorkflowExecutionsDto';
import type { StartWorkflowDto } from './models/StartWorkflowDto';
import type { UpdateTaskStatusDto } from './models/UpdateTaskStatusDto';
import type { UpdateWorkflowDefDto } from './models/UpdateWorkflowDefDto';
import type { UpdateWorkflowTriggerDto } from './models/UpdateWorkflowTriggerDto';
import type { CreateCredentialDto } from './models/CreateCredentialDto';
import type { CreateCredentialTypeDto } from './models/CreateCredentialTypeDto';
import type { UpdateCredentialDto } from './models/UpdateCredentialDto';
import type { CreateBlockDto } from './models/CreateBlockDto';
import type { CreateBlockResp } from './models/CreateBlockResp';
import type { ExecuteBlockDto } from './models/ExecuteBlockDto';
import type { GetBlockResp } from './models/GetBlockResp';
import type { ListBlocksResp } from './models/ListBlocksResp';
import type { ParseBlockFromOpenApiDto } from './models/ParseBlockFromOpenApiDto';
import type { RegisterBlockDto } from './models/RegisterBlockDto';
import type { CommonBooleanResposeDto } from './models/CommonBooleanResposeDto';
import type { CreateWorkflowTemplateDto } from './models/CreateWorkflowTemplateDto';
import type { ForkTemplateResp } from './models/ForkTemplateResp';
import type { ListMyTemplatesResp } from './models/ListMyTemplatesResp';
import type { ListWorkflowTemplatesCategoriesResp } from './models/ListWorkflowTemplatesCategoriesResp';
import type { ListWorkflowTemplatesResp } from './models/ListWorkflowTemplatesResp';
import type { UpdateWorkflowTemplateDto } from './models/UpdateWorkflowTemplateDto';
import type { WorkflowTemplatesResp } from './models/WorkflowTemplatesResp';
import type { CreateWorkflowViewDto } from './models/CreateWorkflowViewDto';
import type { UpdateWorkflowViewDto } from './models/UpdateWorkflowViewDto';
import type { UpsertWorkflowViewRelationDto } from './models/UpsertWorkflowViewRelationDto';
import type { CreateApplicationProjectDto } from './models/CreateApplicationProjectDto';
import type { CreateApplicationProjectFileDto } from './models/CreateApplicationProjectFileDto';
import type { UpdateApplicationProjectFileDto } from './models/UpdateApplicationProjectFileDto';
import type { ApplyJoinTeamDto } from './models/ApplyJoinTeamDto';
import type { CreateTeamDto } from './models/CreateTeamDto';
import type { InviteUser2TeamDto } from './models/InviteUser2TeamDto';
import type { UpdateTeamDto } from './models/UpdateTeamDto';
import type { CreatePageDto } from './models/CreatePageDto';
import type { UpdatePagesDto } from './models/UpdatePagesDto';
import type { BatchActionDto } from './models/BatchActionDto';
import type { CreateResourceDto } from './models/CreateResourceDto';
import type { GetResourceDto } from './models/GetResourceDto';
import type { UpdateResourceDto } from './models/UpdateResourceDto';
import type { CreateChatSessionDto } from './models/CreateChatSessionDto';
import type { UpdateChatSessionDto } from './models/UpdateChatSessionDto';

import { HttpClient, RequestConfig } from "./http/HttpClient";
import { DEFAULT_OPTIONS, VinesClientOptions } from "./VinesClientOptions";


export class VinesClient {
    private options: VinesClientOptions;
    private httpClient: HttpClient;

    constructor(options: VinesClientOptions) {
        this.options = options;
        this.options = Object.assign({}, DEFAULT_OPTIONS, options);
        if (!this.options.apiHost) {
            throw new Error("Init VinesClient failed: apiHost is empty");
        }
        if (!this.options.apiKey) {
            throw new Error("Init VinesClient failed: apiKey is empty");
        }
        this.httpClient = new HttpClient(this.options);
    }

    public async makeRequest(params: RequestConfig) {
        return await this.httpClient.request(params);
    }

    /**
     * @summary 获取近期使用的 workflows
     * @description 获取 7 天内更新过的 workflows
     * @returns any
     */
    public async getRecentlyUsedWorkflows(): Promise<any> {
        return await this.httpClient.request({
            method: 'GET',
            url: '/api/workflow/recently',
            pathParams: {
            },
        });
    }

    /**
     * @summary 获取触发器类型
     * @description 获取触发器类型
     * @returns any
     */
    public async getTriggerTypes(): Promise<any> {
        return await this.httpClient.request({
            method: 'GET',
            url: '/api/workflow/trigger-types',
            pathParams: {
            },
        });
    }

    /**
     * @summary 创建 workflow 定义
     * @description 创建 workflow 定义
     * @returns any
     */
    public async createWorkflowDef(requestBody: CreateWorkflowDefDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/workflow',
        pathParams: {

        },
        data: requestBody,
    });
}

/**
 * @summary 获取工作流列表
 * @description 获取工作流列表
 * @returns any
 */
public async listWorkflow({
    page = 1,
    limit = 10,
    freeText,
    teamId,
    order = 'DESC',
    orderBy = 'updatedTimestamp',
}: {
    /** 当前页数，从 1 开始 **/
    page?: number,
    /** 每页数目，默认为 10 **/
    limit?: number,
    /** 搜索关键词 **/
    freeText?: string,
    /** 查询的团队 ID **/
    teamId?: string,
    /** 排序规则 **/
    order?: 'DESC' | 'ASC',
    /** 排序字段 **/
    orderBy?: 'createdTimestamp' | 'updatedTimestamp',
}): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/workflow',
        params: {
            page: page,
            limit: limit,
            freeText: freeText,
            teamId: teamId,
            order: order,
            orderBy: orderBy,
        },
        pathParams: {






        },
    });
}

/**
 * @summary 更新 workflow 定义
 * @description 更新 workflow 定义
 * @returns any
 */
public async updateWorkflowDef(workflowId: string,
requestBody: UpdateWorkflowDefDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'PUT',
        url: '/api/workflow/{workflowId}',
        pathParams: {
            workflowId,

        },
        data: requestBody,
    });
}

/**
 * @summary 获取 workflow 定义
 * @description 获取 workflow 定义
 * @returns any
 */
public async getWorkflowDef({
    workflowId,
}: {
    workflowId: string,
}): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/workflow/{workflowId}',
        pathParams: {
            workflowId,
        },
    });
}

/**
 * @summary 删除 workflow 定义
 * @description 删除 workflow 定义
 * @returns any
 */
public async deleteWorkflowDef(workflowId: string,
): Promise<any> {
    return await this.httpClient.request({
        method: 'DELETE',
        url: '/api/workflow/{workflowId}',
        pathParams: {
            workflowId,
        },
    });
}

/**
 * @summary 导出 workflow
 * @description 导出 workflow
 * @returns any
 */
public async exportWorkflow({
    workflowId,
}: {
    workflowId: string,
}): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/workflow/{workflowId}/export',
        pathParams: {
            workflowId,
        },
    });
}

/**
 * @summary 检查模板中包含的数据资产
 * @description 检查模板中包含的数据资产
 * @returns any
 */
public async checkBlockAssets({
    workflowId,
}: {
    workflowId: string,
}): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/workflow/{workflowId}/block-assets',
        pathParams: {
            workflowId,
        },
    });
}

/**
 * @summary 导入 workflow
 * @description 导入 workflow
 * @returns any
 */
public async importWorkflow(requestBody: ImportWorkflowDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/workflow/import',
        pathParams: {

        },
        data: requestBody,
    });
}

/**
 * @summary 获取 workflow 的执行记录
 * @description 获取 workflow 的执行记录
 * @returns any
 */
public async listWorkflowExecutions({
    workflowId,
    page = 1,
    limit = 10,
    order = 'DESC',
    chatSessionId,
}: {
    workflowId: string,
    /** 当前页数，从 1 开始 **/
    page?: number,
    /** 每页数目，默认为 10 **/
    limit?: number,
    /** 按照时间排序规则 **/
    order?: 'DESC' | 'ASC',
    /** Chat Session Id **/
    chatSessionId?: string,
}): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/workflow/{workflowId}/executions',
        params: {
            page: page,
            limit: limit,
            order: order,
            chatSessionId: chatSessionId,
        },
        pathParams: {
            workflowId,




        },
    });
}

/**
 * @summary 搜索 workflow 的执行记录
 * @description 搜索 workflow 的执行记录
 * @returns any
 */
public async searchWorkflowExecutions(requestBody: SearchWorkflowExecutionsDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/workflow/executions/search',
        pathParams: {

        },
        data: requestBody,
    });
}

/**
 * @summary 获取某一次 workflow 执行实例的执行详情
 * @description 获取某一次 workflow 执行实例的执行详情
 * @returns any
 */
public async getWorkflowInstanceExecutionDetail({
    workflowInstanceId,
}: {
    workflowInstanceId: string,
}): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/workflow/{workflowInstanceId}/execution-detail',
        pathParams: {
            workflowInstanceId,
        },
    });
}

/**
 * @summary Clone workflow
 * @description Clone worfklow
 * @returns any
 */
public async cloneWorkflow(workflowId: string,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/workflow/{workflowId}/clone',
        pathParams: {
            workflowId,
        },
    });
}

/**
 * @summary 从某个失败的 task 开始重试
 * @description 从某个失败的 task 开始重试
 * @returns any
 */
public async retryFromFailedTask(workflowInstanceId: string,
requestBody: RetryFromFailedTaskDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/workflow/{workflowInstanceId}/retry-form-failed-task',
        pathParams: {
            workflowInstanceId,

        },
        data: requestBody,
    });
}

/**
 * @summary 创建触发器
 * @description 创建触发器
 * @returns any
 */
public async createTrigger(workflowId: string,
requestBody: CreateWorkflowTriggerDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/workflow/{workflowId}/triggers',
        pathParams: {
            workflowId,

        },
        data: requestBody,
    });
}

/**
 * @summary 获取触发器列表
 * @description 获取触发器列表
 * @returns any
 */
public async listTriggers({
    workflowId,
}: {
    workflowId: string,
}): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/workflow/{workflowId}/triggers',
        pathParams: {
            workflowId,
        },
    });
}

/**
 * @summary 修改触发器
 * @description 修改触发器
 * @returns any
 */
public async updateTrigger(workflowId: string,
triggerId: string,
requestBody: UpdateWorkflowTriggerDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'PUT',
        url: '/api/workflow/{workflowId}/triggers/{triggerId}',
        pathParams: {
            workflowId,
            triggerId,

        },
        data: requestBody,
    });
}

/**
 * @summary 删除触发器
 * @description 删除触发器
 * @returns any
 */
public async deleteTrigger(workflowId: string,
triggerId: string,
): Promise<any> {
    return await this.httpClient.request({
        method: 'DELETE',
        url: '/api/workflow/{workflowId}/triggers/{triggerId}',
        pathParams: {
            workflowId,
            triggerId,
        },
    });
}

/**
 * @summary 运行 workflow
 * @description 运行 workflow
 * @returns any
 */
public async startWorkflow(workflowId: string,
requestBody: StartWorkflowDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/workflow/{workflowId}/start',
        pathParams: {
            workflowId,

        },
        data: requestBody,
    });
}

/**
 * @summary 暂停 workflow
 * @description 暂停 workflow
 * @returns any
 */
public async pauseWorkflow(workflowInstanceId: string,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/workflow/{workflowInstanceId}/pause',
        pathParams: {
            workflowInstanceId,
        },
    });
}

/**
 * @summary 恢复执行 workflow
 * @description 恢复执行 workflow
 * @returns any
 */
public async resumeWorkflow(workflowInstanceId: string,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/workflow/{workflowInstanceId}/resume',
        pathParams: {
            workflowInstanceId,
        },
    });
}

/**
 * @summary 终止 workflow
 * @description 终止 workflow
 * @returns any
 */
public async terminateWorkflow(workflowInstanceId: string,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/workflow/{workflowInstanceId}/terminate',
        pathParams: {
            workflowInstanceId,
        },
    });
}

/**
 * @summary 重试 workflow
 * @description 重试 workflow（workflow 失败的情况下）
 * @returns any
 */
public async retryWorkflow(workflowInstanceId: string,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/workflow/{workflowInstanceId}/retry',
        pathParams: {
            workflowInstanceId,
        },
    });
}

/**
 * @summary 修改 workflow task 状态
 * @returns any
 */
public async updateTaskStatus(workflowInstanceId: string,
taskId: string,
requestBody: UpdateTaskStatusDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/workflow/{workflowInstanceId}/tasks/{taskId}',
        pathParams: {
            workflowInstanceId,
            taskId,

        },
        data: requestBody,
    });
}

/**
 * @summary 通过 Webhook 触发工作流
 * @description 通过 Webhook 触发工作流
 * @returns any
 */
public async triggerWorkflowByWebhook({
    webhookPath,
}: {
    webhookPath: string,
}): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/workflow/webhook/{webhookPath}',
        pathParams: {
            webhookPath,
        },
    });
}

/**
 * @summary 获取所有的 credential 定义
 * @description 获取所有的 credential 定义
 * @returns any
 */
public async getCredentialTypes(): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/credential-types',
        pathParams: {
        },
    });
}

/**
 * @summary 创建新的 credential 类型
 * @description 创建新的 credential 类型
 * @returns any
 */
public async createCredentialType(requestBody: CreateCredentialTypeDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/credential-types',
        pathParams: {

        },
        data: requestBody,
    });
}

/**
 * @summary 获取 credential 类型
 * @description 获取 credential 类型
 * @returns any
 */
public async getCredentialType({
    credentialType,
}: {
    credentialType: string,
}): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/credential-types/{credentialType}',
        pathParams: {
            credentialType,
        },
    });
}

/**
 * @summary 获取所有的 credential 内容
 * @description 获取所有的 credential 内容
 * @returns any
 */
public async listCredentials({
    credentialType,
}: {
    /** 密钥类型 **/
    credentialType?: string,
}): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/credentials',
        params: {
            credentialType: credentialType,
        },
        pathParams: {

        },
    });
}

/**
 * @summary 创建 credential
 * @description 创建 credential
 * @returns any
 */
public async createCredential(requestBody: CreateCredentialDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/credentials',
        pathParams: {

        },
        data: requestBody,
    });
}

/**
 * @summary 获取密钥详情
 * @description 获取密钥详情
 * @returns any
 */
public async getCredential({
    credentialId,
}: {
    credentialId: string,
}): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/credentials/{credentialId}',
        pathParams: {
            credentialId,
        },
    });
}

/**
 * @summary 修改密钥
 * @description 修改密钥
 * @returns any
 */
public async updateCredential(credentialId: string,
requestBody: UpdateCredentialDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'PUT',
        url: '/api/credentials/{credentialId}',
        pathParams: {
            credentialId,

        },
        data: requestBody,
    });
}

/**
 * @summary 删除密钥
 * @description 删除密钥
 * @returns any
 */
public async deleteCredential(credentialId: string,
): Promise<any> {
    return await this.httpClient.request({
        method: 'DELETE',
        url: '/api/credentials/{credentialId}',
        pathParams: {
            credentialId,
        },
    });
}

/**
 * @summary 获取所有的 workflow blocks
 * @description 获取所有的 workflow blocks
 * @returns ListBlocksResp
 */
public async listBlocks({
    keywords,
    page,
    limit,
    extra,
}: {
    /** 关键词 **/
    keywords?: string,
    /** 页码 **/
    page?: number,
    /** 每页数量 **/
    limit?: number,
    /** 需要附加其他字段 **/
    extra?: string,
}): Promise<ListBlocksResp> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/blocks',
        params: {
            keywords: keywords,
            page: page,
            limit: limit,
            extra: extra,
        },
        pathParams: {




        },
    });
}

/**
 * @summary 创建新的 Block
 * @description 创建新的 Block
 * @returns CreateBlockResp
 */
public async createBlock(requestBody: CreateBlockDto,
): Promise<CreateBlockResp> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/blocks',
        pathParams: {

        },
        data: requestBody,
    });
}

/**
 * @summary 获取 Block 详情
 * @description 获取 Block 详情
 * @returns GetBlockResp
 */
public async getBlock({
    blockName,
}: {
    blockName: string,
}): Promise<GetBlockResp> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/blocks/{blockName}',
        pathParams: {
            blockName,
        },
    });
}

/**
 * @summary 执行 Block
 * @description 单独执行一个 block
 * @returns any
 */
public async executeBlock(requestBody: ExecuteBlockDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/blocks/execute',
        pathParams: {

        },
        data: requestBody,
    });
}

/**
 * @summary 解析 OPNE API 接口
 * @description 解析 OPNE API 接口为一个 block
 * @returns any
 */
public async parseFromOpenApi(requestBody: ParseBlockFromOpenApiDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/blocks/parse-from-openapi',
        pathParams: {

        },
        data: requestBody,
    });
}

/**
 * @summary 向 vines 注册 block
 * @description 向 vines 注册 block
 * @returns any
 */
public async registerBlocks(requestBody: RegisterBlockDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/blocks/register',
        pathParams: {

        },
        data: requestBody,
    });
}

/**
 * @summary 获取工作流模板列表
 * @description 获取工作流模板列表
 * @returns ListWorkflowTemplatesResp
 */
public async listTemplates({
    page = 1,
    limit = 10,
    categoryId,
    orderBy = 'updatedTimestamp',
    freeText,
}: {
    /** 当前页数，从 1 开始 **/
    page?: number,
    /** 每页数目，默认为 10 **/
    limit?: number,
    /** 模板分类 ID **/
    categoryId?: string,
    /** 排序方式 **/
    orderBy?: 'downloadCount' | 'updatedTimestamp',
    /** 关键词，提供则对关键词进行搜索 **/
    freeText?: string,
}): Promise<ListWorkflowTemplatesResp> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/templates',
        params: {
            page: page,
            limit: limit,
            categoryId: categoryId,
            orderBy: orderBy,
            freeText: freeText,
        },
        pathParams: {





        },
    });
}

/**
 * @summary 获取我的工作流模板
 * @description 包含我创建的和我获取的工作流模板
 * @returns ListMyTemplatesResp
 */
public async listMyTemplates(): Promise<ListMyTemplatesResp> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/templates/mine',
        pathParams: {
        },
    });
}

/**
 * @summary 使用 workflowId 搜索工作流模板
 * @description 使用 workflowId 搜索工作流模板
 * @returns WorkflowTemplatesResp
 */
public async findTemplateByWorkflowId(workflowId: string,
): Promise<WorkflowTemplatesResp> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/templates/search/{workflowId}',
        pathParams: {
            workflowId,
        },
    });
}

/**
 * @summary 创建工作流模板
 * @description 创建工作流模板
 * @returns any
 */
public async createTemplate(requestBody: CreateWorkflowTemplateDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/templates/create',
        pathParams: {

        },
        data: requestBody,
    });
}

/**
 * @summary 获取工作流模板分类
 * @description 获取工作流模板分类
 * @returns ListWorkflowTemplatesCategoriesResp
 */
public async listTemplateCategories(): Promise<ListWorkflowTemplatesCategoriesResp> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/templates/categories',
        pathParams: {
        },
    });
}

/**
 * @summary 使用指定的模板创建工作流
 * @description 使用指定的模板创建工作流
 * @returns ForkTemplateResp
 */
public async forkTemplate(id: string,
): Promise<ForkTemplateResp> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/templates/{id}/fork',
        pathParams: {
            id,
        },
    });
}

/**
 * @summary 获取指定的工作流模板
 * @description 获取指定的工作流模板
 * @returns WorkflowTemplatesResp
 */
public async getTemplateById({
    id,
}: {
    id: string,
}): Promise<WorkflowTemplatesResp> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/templates/{id}',
        pathParams: {
            id,
        },
    });
}

/**
 * @summary 更新指定的工作流模板
 * @description 更新指定的工作流模板
 * @returns WorkflowTemplatesResp
 */
public async updateTemplateById(id: string,
requestBody: UpdateWorkflowTemplateDto,
): Promise<WorkflowTemplatesResp> {
    return await this.httpClient.request({
        method: 'PUT',
        url: '/api/templates/{id}',
        pathParams: {
            id,

        },
        data: requestBody,
    });
}

/**
 * @summary 删除指定的工作流模板
 * @description 删除指定的工作流模板
 * @returns CommonBooleanResposeDto
 */
public async removeTemplateById(id: string,
): Promise<CommonBooleanResposeDto> {
    return await this.httpClient.request({
        method: 'DELETE',
        url: '/api/templates/{id}',
        pathParams: {
            id,
        },
    });
}

/**
 * @summary 查询某个工作流视图关联关系
 * @description 查询某个工作流视图关联关系
 * @returns any
 */
public async getWorkflowViewRelationsById({
    relationsId,
}: {
    relationsId: string,
}): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/views/relations/{relationsId}',
        pathParams: {
            relationsId,
        },
    });
}

/**
 * @summary 更新工作流和视图的关联关系
 * @description 更新工作流和视图的关联关系
 * @returns any
 */
public async updateWorkflowViewRelations(relationsId: string,
requestBody: UpsertWorkflowViewRelationDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'PUT',
        url: '/api/views/relations/{relationsId}',
        pathParams: {
            relationsId,

        },
        data: requestBody,
    });
}

/**
 * @summary 删除工作流和视图的关联关系
 * @description 删除工作流和视图的关联关系
 * @returns any
 */
public async removeWorkflowViewRelations(relationsId: string,
): Promise<any> {
    return await this.httpClient.request({
        method: 'DELETE',
        url: '/api/views/relations/{relationsId}',
        pathParams: {
            relationsId,
        },
    });
}

/**
 * @summary 查询工作流关联的视图
 * @description 查询工作流关联的视图
 * @returns any
 */
public async getViewsByWorkflowId({
    workflowId,
}: {
    workflowId: string,
}): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/views/workflow/{workflowId}/relations',
        pathParams: {
            workflowId,
        },
    });
}

/**
 * @summary 通过关联关系 ID 获取视图信息
 * @description 通过关联关系 ID 获取视图信息
 * @returns any
 */
public async getViewByRelationsId({
    relationsId,
}: {
    relationsId: string,
}): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/views/relations/{relationsId}/view',
        pathParams: {
            relationsId,
        },
    });
}

/**
 * @summary 获取视图详情
 * @description 获取视图详情
 * @returns any
 */
public async getView({
    id,
}: {
    id: string,
}): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/views/{id}',
        pathParams: {
            id,
        },
    });
}

/**
 * @summary 修改视图
 * @description 修改视图
 * @returns any
 */
public async updateView(id: string,
requestBody: UpdateWorkflowViewDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'PUT',
        url: '/api/views/{id}',
        pathParams: {
            id,

        },
        data: requestBody,
    });
}

/**
 * @summary 删除视图
 * @description 删除视图
 * @returns any
 */
public async removeView(id: string,
): Promise<any> {
    return await this.httpClient.request({
        method: 'DELETE',
        url: '/api/views/{id}',
        pathParams: {
            id,
        },
    });
}

/**
 * @summary 获取公开的视图列表
 * @description 获取公开的视图列表
 * @returns any
 */
public async listPublicViews({
    page = 1,
    limit = 10,
}: {
    /** 当前页数，从 1 开始 **/
    page?: number,
    /** 每页数目，默认为 10 **/
    limit?: number,
}): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/views',
        params: {
            page: page,
            limit: limit,
        },
        pathParams: {


        },
    });
}

/**
 * @summary 创建视图
 * @description 创建视图
 * @returns any
 */
public async createView(requestBody: CreateWorkflowViewDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/views',
        pathParams: {

        },
        data: requestBody,
    });
}

/**
 * @summary 获取团队下的视图列表
 * @description 获取团队下的视图列表
 * @returns any
 */
public async listTeamViews({
    page = 1,
    limit = 10,
}: {
    /** 当前页数，从 1 开始 **/
    page?: number,
    /** 每页数目，默认为 10 **/
    limit?: number,
}): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/views/team',
        params: {
            page: page,
            limit: limit,
        },
        pathParams: {


        },
    });
}

/**
 * @returns any
 */
public async forkView(id: string,
templateViewId: string,
): Promise<any> {
    return await this.httpClient.request({
        method: 'PUT',
        url: '/api/views/{id}/fork/{templateViewId}',
        pathParams: {
            id,
            templateViewId,
        },
    });
}

/**
 * @summary 关联工作流与视图
 * @description 关联工作流与视图
 * @returns any
 */
public async createWorkflowViewRelations(requestBody: UpsertWorkflowViewRelationDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/views/relations',
        pathParams: {

        },
        data: requestBody,
    });
}

/**
 * @summary 获取应用类型列表
 * @description 获取应用类型列表
 * @returns any
 */
public async listApplications(): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/application',
        pathParams: {
        },
    });
}

/**
 * @summary 获取应用鉴权 apiKey
 * @description 返回一个应用专用的合法 apiKey，如果没有则创建
 * @returns any
 */
public async getApiKey(appName: string,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/application/{appName}/api-key',
        pathParams: {
            appName,
        },
    });
}

/**
 * @summary 获取 application project 列表
 * @description 获取 application project 列表
 * @returns any
 */
public async listProjects({
    appName,
    page = 1,
    limit = 10,
}: {
    appName: string,
    /** 当前页数，从 1 开始 **/
    page?: number,
    /** 每页数目，默认为 10 **/
    limit?: number,
}): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/application/{appName}/projects',
        params: {
            page: page,
            limit: limit,
        },
        pathParams: {
            appName,


        },
    });
}

/**
 * @summary 创建 application project
 * @description 创建 application project
 * @returns any
 */
public async createProject(appName: string,
requestBody: CreateApplicationProjectDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/application/{appName}/projects',
        pathParams: {
            appName,

        },
        data: requestBody,
    });
}

/**
 * @summary 获取 application project
 * @description 获取 application project
 * @returns any
 */
public async getProjectById({
    appName,
    projectId,
}: {
    appName: string,
    projectId: string,
}): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/application/{appName}/projects/{projectId}',
        pathParams: {
            appName,
            projectId,
        },
    });
}

/**
 * @summary 修改 application project
 * @description 修改 application project
 * @returns any
 */
public async updateProject(appName: string,
projectId: string,
requestBody: CreateApplicationProjectDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'PUT',
        url: '/api/application/{appName}/projects/{projectId}',
        pathParams: {
            appName,
            projectId,

        },
        data: requestBody,
    });
}

/**
 * @summary 修改 application project file
 * @description 修改 application project file
 * @returns any
 */
public async updateProjectFile(projectId: string,
fileId: string,
requestBody: UpdateApplicationProjectFileDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'PUT',
        url: '/api/application/vines-canvas/projects/{projectId}/files/{fileId}',
        pathParams: {
            projectId,
            fileId,

        },
        data: requestBody,
    });
}

/**
 * @summary 删除 application project file
 * @description 删除 application project file
 * @returns any
 */
public async removeProjectFile(fileId: string,
projectId: string,
): Promise<any> {
    return await this.httpClient.request({
        method: 'DELETE',
        url: '/api/application/vines-canvas/projects/{projectId}/files/{fileId}',
        pathParams: {
            fileId,
            projectId,
        },
    });
}

/**
 * @summary 创建 application project file
 * @description 创建 application project file
 * @returns any
 */
public async createProjectFile(projectId: string,
requestBody: CreateApplicationProjectFileDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/application/vines-canvas/projects/{projectId}/files',
        pathParams: {
            projectId,

        },
        data: requestBody,
    });
}

/**
 * @returns any
 */
public async createTeam(requestBody: CreateTeamDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/teams/create',
        pathParams: {

        },
        data: requestBody,
    });
}

/**
 * @returns any
 */
public async updateTeam(requestBody: UpdateTeamDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/teams/update',
        pathParams: {

        },
        data: requestBody,
    });
}

/**
 * @returns any
 */
public async getUserTeams(): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/teams',
        pathParams: {
        },
    });
}

/**
 * @summary 获取团队信息
 * @description 获取团队信息
 * @returns any
 */
public async getTeamDetail({
    id,
}: {
    id: string,
}): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/teams/{id}/detail',
        pathParams: {
            id,
        },
    });
}

/**
 * @returns any
 */
public async getTeamMembers({
    id,
}: {
    id: string,
}): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/teams/{id}/members',
        pathParams: {
            id,
        },
    });
}

/**
 * @returns any
 */
public async removeTeamMember(id: string,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/teams/{id}/members/remove',
        pathParams: {
            id,
        },
    });
}

/**
 * @returns any
 */
public async searchUser(): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/teams/search',
        pathParams: {
        },
    });
}

/**
 * @returns any
 */
public async getTeamInvite({
    id,
}: {
    id: string,
}): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/teams/invites/{id}',
        pathParams: {
            id,
        },
    });
}

/**
 * @returns any
 */
public async acceptTeamInvite(id: string,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/teams/invites/{id}/accept',
        pathParams: {
            id,
        },
    });
}

/**
 * @returns any
 */
public async getTeamInvites({
    teamId,
}: {
    teamId: string,
}): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/teams/invites/manage/{teamId}',
        pathParams: {
            teamId,
        },
    });
}

/**
 * @returns any
 */
public async inviteUserToTeam(teamId: string,
requestBody: InviteUser2TeamDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/teams/invites/{teamId}',
        pathParams: {
            teamId,

        },
        data: requestBody,
    });
}

/**
 * @returns any
 */
public async updateTeamInviteRemark(inviteId: string,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/teams/invites/manage/{teamId}/remark/{inviteId}',
        pathParams: {
            inviteId,
        },
    });
}

/**
 * @returns any
 */
public async toggleForeverTeamInviteLinkStatus(inviteId: string,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/teams/invites/manage/{teamId}/toggle/{inviteId}',
        pathParams: {
            inviteId,
        },
    });
}

/**
 * @returns any
 */
public async deleteTeamInvite(inviteId: string,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/teams/invites/manage/{teamId}/delete/{inviteId}',
        pathParams: {
            inviteId,
        },
    });
}

/**
 * @returns any
 */
public async getApplyJoinTeamList({
    teamId,
}: {
    teamId: string,
}): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/teams/apply/{teamId}',
        pathParams: {
            teamId,
        },
    });
}

/**
 * @returns any
 */
public async applyJoinTeam(teamId: string,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/teams/apply/{teamId}',
        pathParams: {
            teamId,
        },
    });
}

/**
 * @returns any
 */
public async updateApplyJoinTeam(teamId: string,
requestBody: ApplyJoinTeamDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/teams/apply/{teamId}/update',
        pathParams: {
            teamId,

        },
        data: requestBody,
    });
}

/**
 * @summary 获取视图类型定义
 * @description 获取视图类型定义
 * @returns any
 */
public async listPageTypes(): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/page-types',
        pathParams: {
        },
    });
}

/**
 * @summary 获取工作流下的所有视图（根据 sortIndex 从小到大排序），返回视图列表
 * @description 获取工作流下的所有视图（根据 sortIndex 从小到大排序），返回视图列表
 * @returns any
 */
public async listWorkflowPages({
    workflowId,
}: {
    workflowId: string,
}): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/workflow/{workflowId}/pages',
        pathParams: {
            workflowId,
        },
    });
}

/**
 * @summary 在工作流下创建视图，返回新的视图列表
 * @description 在工作流下创建视图，返回新的视图列表
 * @returns any
 */
public async createWorkflowPage(workflowId: string,
requestBody: CreatePageDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/workflow/{workflowId}/pages',
        pathParams: {
            workflowId,

        },
        data: requestBody,
    });
}

/**
 * @summary 批量修改视图，可以用来更新 sortIndex，返回新的视图列表
 * @description 批量修改视图，可以用来更新 sortIndex，返回新的视图列表
 * @returns any
 */
public async updateWorkflowPages(workflowId: string,
requestBody: UpdatePagesDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'PUT',
        url: '/api/workflow/{workflowId}/pages',
        pathParams: {
            workflowId,

        },
        data: requestBody,
    });
}

/**
 * @summary 获取工作流视图详情
 * @description 获取工作流视图详情，无需鉴权
 * @returns any
 */
public async getWorkflowPageByPageId({
    pageId,
}: {
    pageId: string,
}): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/pages/{pageId}',
        pathParams: {
            pageId,
        },
    });
}

/**
 * @summary 删除视图，返回新的视图列表
 * @description 删除视图，返回新的视图列表
 * @returns any
 */
public async removeWorkflowPage(workflowId: string,
pageId: string,
): Promise<any> {
    return await this.httpClient.request({
        method: 'DELETE',
        url: '/api/workflow/{workflowId}/pages/{pageId}',
        pathParams: {
            workflowId,
            pageId,
        },
    });
}

/**
 * @returns any
 */
public async uploadFile(): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/resources/upload/img',
        pathParams: {
        },
    });
}

/**
 * @returns any
 */
public async getResourceCategories(): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/resources/categories',
        pathParams: {
        },
    });
}

/**
 * @returns any
 */
public async createCategory(): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/resources/categories',
        pathParams: {
        },
    });
}

/**
 * @returns any
 */
public async deleteCategory(id: string,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/resources/categories/{id}/delete',
        pathParams: {
            id,
        },
    });
}

/**
 * @returns any
 */
public async deleteResource(id: string,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/resources/{id}/delete',
        pathParams: {
            id,
        },
    });
}

/**
 * @returns any
 */
public async updateResource(id: string,
requestBody: UpdateResourceDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/resources/{id}/update',
        pathParams: {
            id,

        },
        data: requestBody,
    });
}

/**
 * @returns any
 */
public async getResources(requestBody: GetResourceDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/resources/list',
        pathParams: {

        },
        data: requestBody,
    });
}

/**
 * @returns any
 */
public async batchDelete(): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/resources/delete',
        pathParams: {
        },
    });
}

/**
 * @returns any
 */
public async batchAction(requestBody: BatchActionDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/resources/batch',
        pathParams: {

        },
        data: requestBody,
    });
}

/**
 * @returns any
 */
public async getBatchActionStatus(): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/resources/batch/status',
        pathParams: {
        },
    });
}

/**
 * @returns any
 */
public async createResource(requestBody: CreateResourceDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/resources',
        pathParams: {

        },
        data: requestBody,
    });
}

/**
 * @returns any
 */
public async dataset(): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/resources/createDataset',
        pathParams: {
        },
    });
}

/**
 * @returns any
 */
public async createChatSession(requestBody: CreateChatSessionDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/chat-sessions',
        pathParams: {

        },
        data: requestBody,
    });
}

/**
 * @returns any
 */
public async listChatSessions({
    workflowId,
}: {
    /** workflowId **/
    workflowId: string,
}): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/chat-sessions',
        params: {
            workflowId: workflowId,
        },
        pathParams: {

        },
    });
}

/**
 * @returns any
 */
public async deleteChatSession(sessionId: string,
): Promise<any> {
    return await this.httpClient.request({
        method: 'DELETE',
        url: '/api/chat-sessions/{sessionId}',
        pathParams: {
            sessionId,
        },
    });
}

/**
 * @returns any
 */
public async updateChatSession(sessionId: string,
requestBody: UpdateChatSessionDto,
): Promise<any> {
    return await this.httpClient.request({
        method: 'PUT',
        url: '/api/chat-sessions/{sessionId}',
        pathParams: {
            sessionId,

        },
        data: requestBody,
    });
}

/**
 * @returns any
 */
public async getOemConfig(): Promise<any> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/configs',
        pathParams: {
        },
    });
}

}