/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateWorkflowDefDto } from "./models/CreateWorkflowDefDto";
import type { SearchWorkflowExecutionsDto } from "./models/SearchWorkflowExecutionsDto";
import type { StartWorkflowDto } from "./models/StartWorkflowDto";
import type { UpdateTaskStatusDto } from "./models/UpdateTaskStatusDto";
import type { UpdateWorkflowDefDto } from "./models/UpdateWorkflowDefDto";
import type { CreateBlockDto } from "./models/CreateBlockDto";
import type { CreateCredentialDto } from "./models/CreateCredentialDto";
import type { CreateCredentialTypeDto } from "./models/CreateCredentialTypeDto";
import type { CreateWorkflowMarketDto } from "./models/CreateWorkflowMarketDto";
import type { ListWorkflowMarketDto } from "./models/ListWorkflowMarketDto";
import type { UpdateWorkflowMarketDto } from "./models/UpdateWorkflowMarketDto";

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
   * @returns any
   */
  public async createAuthCode(): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/workflow/create-auth-code",
      pathParams: {},
    });
  }

  /**
   * @returns any
   */
  public async getAuthToken({ code }: { code: string }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/workflow/get-auth-token",
      params: {
        code: code,
      },
      pathParams: {},
    });
  }

  /**
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
   * @summary 获取所有 workflow 定义
   * @description 获取所有 workflow 定义
   * @returns any
   */
  public async listWorkflowDefs({ search }: { search: string }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/workflow",
      params: {
        search: search,
      },
      pathParams: {},
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
  public async getWorkflowDef({ workflowId }: { workflowId: string }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/workflow/{workflowId}",
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
   * @summary 获取 workflow 的执行记录
   * @description 获取 workflow 的执行记录
   * @returns any
   */
  public async listWorkflowExecutions({
    workflowId,
    page = 1,
    limit = 10,
    order = "DESC",
  }: {
    workflowId: string;
    /** 当前页数，从 1 开始 **/
    page?: number;
    /** 每页数目，默认为 10 **/
    limit?: number;
    /** 按照时间排序规则 **/
    order?: "DESC" | "ASC";
  }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/workflow/{workflowId}/executions",
      params: {
        page: page,
        limit: limit,
        order: order,
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
   * @summary 获取所有的 workflow blocks
   * @description 获取所有的 workflow blocks
   * @returns any
   */
  public async getBlocks({
    onlyCustom = false,
  }: {
    /** 是否只获取自定义的 Block **/
    onlyCustom?: boolean;
  }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/blocks",
      params: {
        onlyCustom: onlyCustom,
      },
      pathParams: {},
    });
  }

  /**
   * @summary 创建新的 Block
   * @description 创建新的 Block
   * @returns any
   */
  public async createBlock(requestBody: CreateBlockDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/blocks",
      pathParams: {},
      data: requestBody,
    });
  }

  /**
   * @summary 获取 Block 详情
   * @description 获取 Block 详情
   * @returns any
   */
  public async getBlock({ blockName }: { blockName: string }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/blocks/{blockName}",
      pathParams: {
        blockName,
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
   * @summary 获取所有的 credential 内容
   * @description 获取所有的 credential 内容
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
   * @returns any
   */
  public async list(requestBody: ListWorkflowMarketDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/flow-market/list",
      pathParams: {},
      data: requestBody,
    });
  }

  /**
   * @returns any
   */
  public async getMyMarketList(): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/flow-market/mine",
      pathParams: {},
    });
  }

  /**
   * @returns any
   */
  public async search(workflowId: string): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/flow-market/search/{workflowId}",
      pathParams: {
        workflowId,
      },
    });
  }

  /**
   * @returns any
   */
  public async create(requestBody: CreateWorkflowMarketDto): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/flow-market/create",
      pathParams: {},
      data: requestBody,
    });
  }

  /**
   * @returns any
   */
  public async listCategories(): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/flow-market/categories",
      pathParams: {},
    });
  }

  /**
   * @returns any
   */
  public async clone(id: string): Promise<any> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/flow-market/{id}/fork",
      pathParams: {
        id,
      },
    });
  }

  /**
   * @returns any
   */
  public async getItem({ id }: { id: string }): Promise<any> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/flow-market/{id}",
      pathParams: {
        id,
      },
    });
  }

  /**
   * @returns any
   */
  public async update(id: string, requestBody: UpdateWorkflowMarketDto): Promise<any> {
    return await this.httpClient.request({
      method: "PUT",
      url: "/api/flow-market/{id}",
      pathParams: {
        id,
      },
      data: requestBody,
    });
  }

  /**
   * @returns any
   */
  public async remove(id: string): Promise<any> {
    return await this.httpClient.request({
      method: "DELETE",
      url: "/api/flow-market/{id}",
      pathParams: {
        id,
      },
    });
  }
}
