/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplyJoinTeamDto } from "./models/ApplyJoinTeamDto";
import type { CreateApiKeyDto } from "./models/CreateApiKeyDto";
import type { CreateApplicationProjectDto } from "./models/CreateApplicationProjectDto";
import type { CreateApplicationProjectFileDto } from "./models/CreateApplicationProjectFileDto";
import type { CreateBlockDto } from "./models/CreateBlockDto";
import type { CreateBlockResp } from "./models/CreateBlockResp";
import type { CreateChatSessionDto } from "./models/CreateChatSessionDto";
import type { CreateCredentialDto } from "./models/CreateCredentialDto";
import type { CreateCredentialTypeDto } from "./models/CreateCredentialTypeDto";
import type { CreateNewVersionWorkflowDefDto } from "./models/CreateNewVersionWorkflowDefDto";
import type { CreatePageDto } from "./models/CreatePageDto";
import type { CreateResourceDto } from "./models/CreateResourceDto";
import type { CreateTeamDto } from "./models/CreateTeamDto";
import type { CreateWorkflowDefDto } from "./models/CreateWorkflowDefDto";
import type { CreateWorkflowTriggerDto } from "./models/CreateWorkflowTriggerDto";
import type { DebugWorkflowDto } from "./models/DebugWorkflowDto";
import type { ExecuteBlockDto } from "./models/ExecuteBlockDto";
import type { GetBlockResp } from "./models/GetBlockResp";
import type { ImportWorkflowDto } from "./models/ImportWorkflowDto";
import type { InviteUser2TeamDto } from "./models/InviteUser2TeamDto";
import type { ListBlocksResp } from "./models/ListBlocksResp";
import type { ListDto } from "./models/ListDto";
import type { LLMServer } from "./models/LLMServer";
import type { LoginDto } from "./models/LoginDto";
import type { NamePasswordDto } from "./models/NamePasswordDto";
import type { ParseBlockFromOpenApiDto } from "./models/ParseBlockFromOpenApiDto";
import type { RegisterBlockDto } from "./models/RegisterBlockDto";
import type { RetryFromFailedTaskDto } from "./models/RetryFromFailedTaskDto";
import type { SearchWorkflowExecutionsDto } from "./models/SearchWorkflowExecutionsDto";
import type { StartWorkflowDto } from "./models/StartWorkflowDto";
import type { UpdateApplicationProjectFileDto } from "./models/UpdateApplicationProjectFileDto";
import type { UpdateChatSessionDto } from "./models/UpdateChatSessionDto";
import type { UpdateCredentialDto } from "./models/UpdateCredentialDto";
import type { UpdatePagesDto } from "./models/UpdatePagesDto";
import type { UpdateResourceDto } from "./models/UpdateResourceDto";
import type { UpdateTaskStatusDto } from "./models/UpdateTaskStatusDto";
import type { UpdateTeamDto } from "./models/UpdateTeamDto";
import type { UpdateUgcFilterRuleDto } from "./models/UpdateUgcFilterRuleDto";
import type { UpdateUgcItemDto } from "./models/UpdateUgcItemDto";
import type { UpdateUserInfoDto } from "./models/UpdateUserInfoDto";
import type { UpdateWorkflowDefDto } from "./models/UpdateWorkflowDefDto";
import type { UpdateWorkflowTriggerDto } from "./models/UpdateWorkflowTriggerDto";
import type { ValidateWorkflowDto } from "./models/ValidateWorkflowDto";

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
      method: "GET",
      url: "/api/workflow/recently",
      pathParams: {},
    });
  }

  /**
   * @summary 获取触发器类型
   * @description 获取触发器类型
   * @returns any
   */
  public async getTriggerTypes(): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/workflow/trigger-types",
      pathParams: {},
    });
  }

  /**
   * @summary 创建 workflow 定义
   * @description 创建 workflow 定义
   * @returns any
   */
  public async createWorkflowDef(requestBody: CreateWorkflowDefDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/workflow",
      pathParams: {},
      data: requestBody,
    });
  }

  /**
   * @summary 更新 workflow 定义
   * @description 更新 workflow 定义
   * @returns any
   */
  public async updateWorkflowDef(workflowId: string, requestBody: UpdateWorkflowDefDto): Promise<any> {
    return await this.httpClient.request({
      method: "PUT",
      url: "/api/workflow/{workflowId}",
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
    version,
  }: {
    workflowId: string;
    /** 工作流版本，默认获取最新的版本 **/
    version?: number;
  }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/workflow/{workflowId}",
      params: {
        version: version,
      },
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
  public async deleteWorkflowDef(workflowId: string): Promise<any> {
    return await this.httpClient.request({
      method: "DELETE",
      url: "/api/workflow/{workflowId}",
      pathParams: {
        workflowId,
      },
    });
  }

  /**
   * @summary 获取工作流列表
   * @description 获取工作流列表
   * @returns any
   */
  public async listWorkflowV2({
    page = 1,
    limit = 10,
    search,
    orderColumn,
    orderBy,
  }: {
    /** 当前页数，从 1 开始 **/
    page?: number;
    /** 每页数目，默认为 10 **/
    limit?: number;
    /** 搜索关键词 **/
    search?: string;
    /** 排序字段 **/
    orderColumn?: string;
    /** 排序规则 **/
    orderBy?: string;
  }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/workflow/list",
      params: {
        page: page,
        limit: limit,
        search: search,
        orderColumn: orderColumn,
        orderBy: orderBy,
      },
      pathParams: {},
    });
  }

  /**
   * @summary 创建新版本的工作流
   * @description 创建新版本的工作流
   * @returns any
   */
  public async createNewVersionWorkflow(workflowId: string, requestBody: CreateNewVersionWorkflowDefDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/workflow/{workflowId}/versions",
      pathParams: {
        workflowId,
      },
      data: requestBody,
    });
  }

  /**
   * @summary 获取工作流的所有版本
   * @description 获取工作流的所有版本
   * @returns any
   */
  public async getWorkflowVersions({ workflowId }: { workflowId: string }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/workflow/{workflowId}/versions",
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
    version,
    exportAssets,
  }: {
    workflowId: string;
    version: string;
    exportAssets: string;
  }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/workflow/{workflowId}/export",
      params: {
        version: version,
        exportAssets: exportAssets,
      },
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
  public async importWorkflow(requestBody: ImportWorkflowDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/workflow/import",
      pathParams: {},
      data: requestBody,
    });
  }

  /**
   * @summary 检查模板中包含的数据资产
   * @description 检查模板中包含的数据资产
   * @returns any
   */
  public async getWorkflowRelatedAssets({
    workflowId,
    version,
  }: {
    workflowId: string;
    version: string;
  }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/workflow/{workflowId}/related-assets",
      params: {
        version: version,
      },
      pathParams: {
        workflowId,
      },
    });
  }

  /**
   * @summary 校验 workflow
   * @description 校验 workflow
   * @returns any
   */
  public async validateWorkflow(requestBody: ValidateWorkflowDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/workflow/validate",
      pathParams: {},
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
    version = 1,
    order = "DESC",
    chatSessionId,
  }: {
    workflowId: string;
    /** 当前页数，从 1 开始 **/
    page?: number;
    /** 每页数目，默认为 10 **/
    limit?: number;
    /** 工作流版本 **/
    version?: number;
    /** 按照时间排序规则 **/
    order?: "DESC" | "ASC";
    /** Chat Session Id **/
    chatSessionId?: string;
  }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/workflow/{workflowId}/executions",
      params: {
        page: page,
        limit: limit,
        version: version,
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
  public async searchWorkflowExecutions(requestBody: SearchWorkflowExecutionsDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/workflow/executions/search",
      pathParams: {},
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
    workflowInstanceId: string;
  }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/workflow/{workflowInstanceId}/execution-detail",
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
  public async cloneWorkflow(workflowId: string): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/workflow/{workflowId}/clone",
      pathParams: {
        workflowId,
      },
    });
  }

  /**
   * @summary 以 debug 方式执行 workflow
   * @description 以 debug 方式执行 workflow
   * @returns any
   */
  public async debugWorkflow(workflowId: string, requestBody: DebugWorkflowDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/workflow/{workflowId}/debug",
      pathParams: {
        workflowId,
      },
      data: requestBody,
    });
  }

  /**
   * @summary 从某个失败的 task 开始重试
   * @description 从某个失败的 task 开始重试
   * @returns any
   */
  public async retryFromFailedTask(workflowInstanceId: string, requestBody: RetryFromFailedTaskDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/workflow/{workflowInstanceId}/retry-form-failed-task",
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
  public async createTrigger(workflowId: string, requestBody: CreateWorkflowTriggerDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/workflow/{workflowId}/triggers",
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
  public async listTriggers({ workflowId, version }: { workflowId: string; version: string }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/workflow/{workflowId}/triggers",
      params: {
        version: version,
      },
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
  public async updateTrigger(
    workflowId: string,
    triggerId: string,
    requestBody: UpdateWorkflowTriggerDto
  ): Promise<any> {
    return await this.httpClient.request({
      method: "PUT",
      url: "/api/workflow/{workflowId}/triggers/{triggerId}",
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
  public async deleteTrigger(workflowId: string, triggerId: string): Promise<any> {
    return await this.httpClient.request({
      method: "DELETE",
      url: "/api/workflow/{workflowId}/triggers/{triggerId}",
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
  public async startWorkflow(workflowId: string, requestBody: StartWorkflowDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/workflow/{workflowId}/start",
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
  public async pauseWorkflow(workflowInstanceId: string): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/workflow/{workflowInstanceId}/pause",
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
  public async resumeWorkflow(workflowInstanceId: string): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/workflow/{workflowInstanceId}/resume",
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
  public async terminateWorkflow(workflowInstanceId: string): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/workflow/{workflowInstanceId}/terminate",
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
  public async retryWorkflow(workflowInstanceId: string): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/workflow/{workflowInstanceId}/retry",
      pathParams: {
        workflowInstanceId,
      },
    });
  }

  /**
   * @summary 修改 workflow task 状态
   * @returns any
   */
  public async updateTaskStatus(
    workflowInstanceId: string,
    taskId: string,
    requestBody: UpdateTaskStatusDto
  ): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/workflow/{workflowInstanceId}/tasks/{taskId}",
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
  public async triggerWorkflowByWebhook({ webhookPath }: { webhookPath: string }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/workflow/webhook/{webhookPath}",
      pathParams: {
        webhookPath,
      },
    });
  }

  /**
   * @returns any
   */
  public async listWorkflows({ name }: { name: string }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/workflow/text-collection-related/{name}",
      pathParams: {
        name,
      },
    });
  }

  /**
   * @returns any
   */
  public async getUserInfo(): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/users",
      pathParams: {},
    });
  }

  /**
   * @returns any
   */
  public async listUsers({
    page = 1,
    limit = 10,
    search,
    orderColumn,
    orderBy,
  }: {
    /** 当前页数，从 1 开始 **/
    page?: number;
    /** 每页数目，默认为 10 **/
    limit?: number;
    /** 搜索关键词 **/
    search?: string;
    /** 排序字段 **/
    orderColumn?: string;
    /** 排序规则 **/
    orderBy?: string;
  }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/users/list",
      params: {
        page: page,
        limit: limit,
        search: search,
        orderColumn: orderColumn,
        orderBy: orderBy,
      },
      pathParams: {},
    });
  }

  /**
   * @returns any
   */
  public async updateUserInfo(requestBody: UpdateUserInfoDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/users/profile",
      pathParams: {},
      data: requestBody,
    });
  }

  /**
   * @returns any
   */
  public async getUserResources(): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/users/resources",
      pathParams: {},
    });
  }

  /**
   * @returns any
   */
  public async oauth({ code }: { code: string }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/users/oauth",
      params: {
        code: code,
      },
      pathParams: {},
    });
  }

  /**
   * @returns any
   */
  public async createAuthCode(): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/users/oauth",
      pathParams: {},
    });
  }

  /**
   * @returns any
   */
  public async getUser({ id }: { id: string }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/users/{id}",
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
      method: "POST",
      url: "/api/users/search",
      pathParams: {},
    });
  }

  /**
   * @returns any
   */
  public async startPhoneVerify(): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/users/verify/phone",
      pathParams: {},
    });
  }

  /**
   * @returns any
   */
  public async login(requestBody: LoginDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/users/login",
      pathParams: {},
      data: requestBody,
    });
  }

  /**
   * @returns any
   */
  public async generateTokenByUserId({ userId }: { userId: string }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/users/{userId}/token",
      pathParams: {
        userId,
      },
    });
  }

  /**
   * @returns any
   */
  public async listFilterRules({ type }: { type: string }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/ugc/filters",
      params: {
        type: type,
      },
      pathParams: {},
    });
  }

  /**
   * @returns any
   */
  public async createFilterRule(requestBody: UpdateUgcFilterRuleDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/ugc/filters",
      pathParams: {},
      data: requestBody,
    });
  }

  /**
   * @returns any
   */
  public async updateFilterRule(id: string, requestBody: UpdateUgcFilterRuleDto): Promise<any> {
    return await this.httpClient.request({
      method: "PUT",
      url: "/api/ugc/filters/{id}",
      pathParams: {
        id,
      },
      data: requestBody,
    });
  }

  /**
   * @returns any
   */
  public async removeFilterRule(id: string): Promise<any> {
    return await this.httpClient.request({
      method: "DELETE",
      url: "/api/ugc/filters/{id}",
      pathParams: {
        id,
      },
    });
  }

  /**
   * @returns any
   */
  public async listTags(): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/ugc/tags",
      pathParams: {},
    });
  }

  /**
   * @returns any
   */
  public async upsertTag(): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/ugc/tags",
      pathParams: {},
    });
  }

  /**
   * @returns any
   */
  public async updateUgcItem(requestBody: UpdateUgcItemDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/ugc/update",
      pathParams: {},
      data: requestBody,
    });
  }

  /**
   * @returns any
   */
  public async removeTag(tagId: string): Promise<any> {
    return await this.httpClient.request({
      method: "DELETE",
      url: "/api/ugc/tags/{tagId}",
      pathParams: {
        tagId,
      },
    });
  }

  /**
   * @returns any
   */
  public async getOemConfig(): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/configs",
      pathParams: {},
    });
  }

  /**
   * @returns any
   */
  public async getAdminOemConfig(): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/configs/admin",
      pathParams: {},
    });
  }

  /**
   * @returns any
   */
  public async setOemConfig(): Promise<any> {
    return await this.httpClient.request({
      method: "PUT",
      url: "/api/configs/admin",
      pathParams: {},
    });
  }

  /**
   * @returns any
   */
  public async listAdministrators(): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/administrator",
      pathParams: {},
    });
  }

  /**
   * @returns any
   */
  public async addAdministrator(requestBody: NamePasswordDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/administrator",
      pathParams: {},
      data: requestBody,
    });
  }

  /**
   * @returns any
   */
  public async removeAdministrator(id: string): Promise<any> {
    return await this.httpClient.request({
      method: "DELETE",
      url: "/api/administrator/{id}",
      pathParams: {
        id,
      },
    });
  }

  /**
   * @returns any
   */
  public async updatePassword(id: string): Promise<any> {
    return await this.httpClient.request({
      method: "PUT",
      url: "/api/administrator/{id}",
      pathParams: {
        id,
      },
    });
  }

  /**
   * @returns any
   */
  public async addLlmServer(requestBody: LLMServer): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/administrator/add-llm-server",
      pathParams: {},
      data: requestBody,
    });
  }

  /**
   * @summary 获取所有的 credential 定义
   * @description 获取所有的 credential 定义
   * @returns any
   */
  public async getCredentialTypes(): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/credential-types",
      pathParams: {},
    });
  }

  /**
   * @summary 创建新的 credential 类型
   * @description 创建新的 credential 类型
   * @returns any
   */
  public async createCredentialType(requestBody: CreateCredentialTypeDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/credential-types",
      pathParams: {},
      data: requestBody,
    });
  }

  /**
   * @summary 获取 credential 类型
   * @description 获取 credential 类型
   * @returns any
   */
  public async getCredentialType({ credentialType }: { credentialType: string }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/credential-types/{credentialType}",
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
    credentialType?: string;
  }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/credentials",
      params: {
        credentialType: credentialType,
      },
      pathParams: {},
    });
  }

  /**
   * @summary 创建 credential
   * @description 创建 credential
   * @returns any
   */
  public async createCredential(requestBody: CreateCredentialDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/credentials",
      pathParams: {},
      data: requestBody,
    });
  }

  /**
   * @summary 获取密钥详情
   * @description 获取密钥详情
   * @returns any
   */
  public async getCredential({ credentialId }: { credentialId: string }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/credentials/{credentialId}",
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
  public async updateCredential(credentialId: string, requestBody: UpdateCredentialDto): Promise<any> {
    return await this.httpClient.request({
      method: "PUT",
      url: "/api/credentials/{credentialId}",
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
  public async deleteCredential(credentialId: string): Promise<any> {
    return await this.httpClient.request({
      method: "DELETE",
      url: "/api/credentials/{credentialId}",
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
    extra,
  }: {
    /** 需要附加其他字段 **/
    extra?: string;
  }): Promise<ListBlocksResp> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/blocks",
      params: {
        extra: extra,
      },
      pathParams: {},
    });
  }

  /**
   * @summary 创建新的 Block
   * @description 创建新的 Block
   * @returns CreateBlockResp
   */
  public async createBlock(requestBody: CreateBlockDto): Promise<CreateBlockResp> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/blocks",
      pathParams: {},
      data: requestBody,
    });
  }

  /**
   * @returns any
   */
  public async adminListBlocks({
    page = 1,
    limit = 10,
    search,
    orderColumn,
    orderBy,
  }: {
    /** 当前页数，从 1 开始 **/
    page?: number;
    /** 每页数目，默认为 10 **/
    limit?: number;
    /** 搜索关键词 **/
    search?: string;
    /** 排序字段 **/
    orderColumn?: string;
    /** 排序规则 **/
    orderBy?: string;
  }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/blocks/list",
      params: {
        page: page,
        limit: limit,
        search: search,
        orderColumn: orderColumn,
        orderBy: orderBy,
      },
      pathParams: {},
    });
  }

  /**
   * @summary 获取 Block 详情
   * @description 获取 Block 详情
   * @returns GetBlockResp
   */
  public async getBlock({ blockName }: { blockName: string }): Promise<GetBlockResp> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/blocks/{blockName}",
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
  public async executeBlock(requestBody: ExecuteBlockDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/blocks/execute",
      pathParams: {},
      data: requestBody,
    });
  }

  /**
   * @summary 解析 OPNE API 接口
   * @description 解析 OPNE API 接口为一个 block
   * @returns any
   */
  public async parseFromOpenApi(requestBody: ParseBlockFromOpenApiDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/blocks/parse-from-openapi",
      pathParams: {},
      data: requestBody,
    });
  }

  /**
   * @summary 向 vines 注册 block
   * @description 向 vines 注册 block
   * @returns any
   */
  public async registerBlocks(requestBody: RegisterBlockDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/blocks/register",
      pathParams: {},
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
      method: "GET",
      url: "/api/application",
      pathParams: {},
    });
  }

  /**
   * @summary 获取应用鉴权 apiKey
   * @description 返回一个应用专用的合法 apiKey，如果没有则创建
   * @returns any
   */
  public async getApiKey(appName: string): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/application/{appName}/api-key",
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
    search,
    orderColumn,
    orderBy,
  }: {
    appName: string;
    /** 当前页数，从 1 开始 **/
    page?: number;
    /** 每页数目，默认为 10 **/
    limit?: number;
    /** 搜索关键词 **/
    search?: string;
    /** 排序字段 **/
    orderColumn?: string;
    /** 排序规则 **/
    orderBy?: string;
  }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/application/{appName}/projects",
      params: {
        page: page,
        limit: limit,
        search: search,
        orderColumn: orderColumn,
        orderBy: orderBy,
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
  public async createProject(appName: string, requestBody: CreateApplicationProjectDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/application/{appName}/projects",
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
  public async getProjectById({ appName, projectId }: { appName: string; projectId: string }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/application/{appName}/projects/{projectId}",
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
  public async updateProject(
    appName: string,
    projectId: string,
    requestBody: CreateApplicationProjectDto
  ): Promise<any> {
    return await this.httpClient.request({
      method: "PUT",
      url: "/api/application/{appName}/projects/{projectId}",
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
  public async updateProjectFile(
    projectId: string,
    fileId: string,
    requestBody: UpdateApplicationProjectFileDto
  ): Promise<any> {
    return await this.httpClient.request({
      method: "PUT",
      url: "/api/application/vines-canvas/projects/{projectId}/files/{fileId}",
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
  public async removeProjectFile(fileId: string, projectId: string): Promise<any> {
    return await this.httpClient.request({
      method: "DELETE",
      url: "/api/application/vines-canvas/projects/{projectId}/files/{fileId}",
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
  public async createProjectFile(projectId: string, requestBody: CreateApplicationProjectFileDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/application/vines-canvas/projects/{projectId}/files",
      pathParams: {
        projectId,
      },
      data: requestBody,
    });
  }

  /**
   * @returns any
   */
  public async createTeam(requestBody: CreateTeamDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/teams/create",
      pathParams: {},
      data: requestBody,
    });
  }

  /**
   * @returns any
   */
  public async updateTeam(requestBody: UpdateTeamDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/teams/update",
      pathParams: {},
      data: requestBody,
    });
  }

  /**
   * @returns any
   */
  public async getUserTeams({
    page = 1,
    limit = 10,
    search,
    orderColumn,
    orderBy,
  }: {
    /** 当前页数，从 1 开始 **/
    page?: number;
    /** 每页数目，默认为 10 **/
    limit?: number;
    /** 搜索关键词 **/
    search?: string;
    /** 排序字段 **/
    orderColumn?: string;
    /** 排序规则 **/
    orderBy?: string;
  }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/teams",
      params: {
        page: page,
        limit: limit,
        search: search,
        orderColumn: orderColumn,
        orderBy: orderBy,
      },
      pathParams: {},
    });
  }

  /**
   * @summary 获取团队信息
   * @description 获取团队信息
   * @returns any
   */
  public async getTeamDetail({ id }: { id: string }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/teams/{id}/detail",
      pathParams: {
        id,
      },
    });
  }

  /**
   * @returns any
   */
  public async deleteTeam(id: string): Promise<any> {
    return await this.httpClient.request({
      method: "DELETE",
      url: "/api/teams/{id}",
      pathParams: {
        id,
      },
    });
  }

  /**
   * @returns any
   */
  public async getTeamMembers({ id }: { id: string }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/teams/{id}/members",
      pathParams: {
        id,
      },
    });
  }

  /**
   * @returns any
   */
  public async removeTeamMember(id: string): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/teams/{id}/members/remove",
      pathParams: {
        id,
      },
    });
  }

  /**
   * @returns any
   */
  public async searchTeam(): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/teams/search",
      pathParams: {},
    });
  }

  /**
   * @returns any
   */
  public async getTeamInvite({ id }: { id: string }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/teams/invites/{id}",
      pathParams: {
        id,
      },
    });
  }

  /**
   * @returns any
   */
  public async acceptTeamInvite(id: string): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/teams/invites/{id}/accept",
      pathParams: {
        id,
      },
    });
  }

  /**
   * @returns any
   */
  public async getTeamInvites({ teamId }: { teamId: string }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/teams/invites/manage/{teamId}",
      pathParams: {
        teamId,
      },
    });
  }

  /**
   * @returns any
   */
  public async inviteUserToTeam(teamId: string, requestBody: InviteUser2TeamDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/teams/invites/{teamId}",
      pathParams: {
        teamId,
      },
      data: requestBody,
    });
  }

  /**
   * @returns any
   */
  public async updateTeamInviteRemark(inviteId: string): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/teams/invites/manage/{teamId}/remark/{inviteId}",
      pathParams: {
        inviteId,
      },
    });
  }

  /**
   * @returns any
   */
  public async toggleForeverTeamInviteLinkStatus(inviteId: string): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/teams/invites/manage/{teamId}/toggle/{inviteId}",
      pathParams: {
        inviteId,
      },
    });
  }

  /**
   * @returns any
   */
  public async deleteTeamInvite(inviteId: string): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/teams/invites/manage/{teamId}/delete/{inviteId}",
      pathParams: {
        inviteId,
      },
    });
  }

  /**
   * @returns any
   */
  public async getApplyJoinTeamList({ teamId }: { teamId: string }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/teams/apply/{teamId}",
      pathParams: {
        teamId,
      },
    });
  }

  /**
   * @returns any
   */
  public async applyJoinTeam(teamId: string): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/teams/apply/{teamId}",
      pathParams: {
        teamId,
      },
    });
  }

  /**
   * @returns any
   */
  public async updateApplyJoinTeam(teamId: string, requestBody: ApplyJoinTeamDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/teams/apply/{teamId}/update",
      pathParams: {
        teamId,
      },
      data: requestBody,
    });
  }

  /**
   * @returns any
   */
  public async generateTeamDiveInToken({ teamId }: { teamId: string }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/teams/{teamId}/dive-in",
      pathParams: {
        teamId,
      },
    });
  }

  /**
   * @summary 获取视图类型定义
   * @description 获取视图类型定义
   * @returns any
   */
  public async listPageTypes(): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/page-types",
      pathParams: {},
    });
  }

  /**
   * @summary 获取工作流下的所有视图（根据 sortIndex 从小到大排序），返回视图列表
   * @description 获取工作流下的所有视图（根据 sortIndex 从小到大排序），返回视图列表
   * @returns any
   */
  public async listWorkflowPages({ workflowId }: { workflowId: string }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/workflow/{workflowId}/pages",
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
  public async createWorkflowPage(workflowId: string, requestBody: CreatePageDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/workflow/{workflowId}/pages",
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
  public async updateWorkflowPages(workflowId: string, requestBody: UpdatePagesDto): Promise<any> {
    return await this.httpClient.request({
      method: "PUT",
      url: "/api/workflow/{workflowId}/pages",
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
  public async getWorkflowPageByPageId({ pageId }: { pageId: string }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/pages/{pageId}",
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
  public async removeWorkflowPage(workflowId: string, pageId: string): Promise<any> {
    return await this.httpClient.request({
      method: "DELETE",
      url: "/api/workflow/{workflowId}/pages/{pageId}",
      pathParams: {
        workflowId,
        pageId,
      },
    });
  }

  /**
   * @returns any
   */
  public async listPublicPages(): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/pages",
      pathParams: {},
    });
  }

  /**
   * @returns any
   */
  public async pinPage(pageId: string): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/pages/{pageId}/pin",
      pathParams: {
        pageId,
      },
    });
  }

  /**
   * @returns any
   */
  public async getResourceByHash({ md5 }: { md5: string }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/resources/md5/{md5}",
      pathParams: {
        md5,
      },
    });
  }

  /**
   * @returns any
   */
  public async uploadFile(): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/resources/upload/img",
      pathParams: {},
    });
  }

  /**
   * @returns any
   */
  public async deleteResource(id: string): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/resources/{id}/delete",
      pathParams: {
        id,
      },
    });
  }

  /**
   * @returns any
   */
  public async updateResource(id: string, requestBody: UpdateResourceDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/resources/{id}/update",
      pathParams: {
        id,
      },
      data: requestBody,
    });
  }

  /**
   * @returns any
   */
  public async listResources(requestBody: ListDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/resources/list",
      pathParams: {},
      data: requestBody,
    });
  }

  /**
   * @returns any
   */
  public async batchDelete(): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/resources/delete",
      pathParams: {},
    });
  }

  /**
   * @returns any
   */
  public async createResource(requestBody: CreateResourceDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/resources",
      pathParams: {},
      data: requestBody,
    });
  }

  /**
   * @returns any
   */
  public async createChatSession(requestBody: CreateChatSessionDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/chat-sessions",
      pathParams: {},
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
    workflowId: string;
  }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/chat-sessions",
      params: {
        workflowId: workflowId,
      },
      pathParams: {},
    });
  }

  /**
   * @returns any
   */
  public async deleteChatSession(sessionId: string): Promise<any> {
    return await this.httpClient.request({
      method: "DELETE",
      url: "/api/chat-sessions/{sessionId}",
      pathParams: {
        sessionId,
      },
    });
  }

  /**
   * @returns any
   */
  public async updateChatSession(sessionId: string, requestBody: UpdateChatSessionDto): Promise<any> {
    return await this.httpClient.request({
      method: "PUT",
      url: "/api/chat-sessions/{sessionId}",
      pathParams: {
        sessionId,
      },
      data: requestBody,
    });
  }

  /**
   * @summary 创建 apikey
   * @description 创建 apikey
   * @returns any
   */
  public async createApiKey(requestBody: CreateApiKeyDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/apikeys",
      pathParams: {},
      data: requestBody,
    });
  }

  /**
   * @summary 获取 apikey 列表
   * @description 获取 apikey 列表
   * @returns any
   */
  public async listApiKeys(): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/apikeys",
      pathParams: {},
    });
  }

  /**
   * @summary 废弃指定 apiKey
   * @description 废弃指定 apiKey
   * @returns any
   */
  public async revokeApiKey(apiKeyId: string): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/apikeys/{apiKeyId}/revoke",
      pathParams: {
        apiKeyId,
      },
    });
  }
}
