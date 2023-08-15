import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { VinesClientOptions } from "../VinesClientOptions";
import { pickBy } from "../utils";

export interface RequestConfig extends AxiosRequestConfig {
  pathParams?: { [x: string]: any };
}

export class HttpClient {
  options: VinesClientOptions;
  axios: AxiosInstance;

  constructor(options: VinesClientOptions) {
    this.options = options;
    this.axios = Axios.create({
      withCredentials: true,
    });
  }

  async request(config: RequestConfig) {
    // 此次请求的请求头
    let headers = {
      "x-vines-apikey": this.options.apiKey,
    };
    config.headers = headers;
    config.timeout = this.options.timeout;

    if (config.pathParams) {
      const { pathParams } = config;
      let realUrl = config.url;
      for (const key in pathParams) {
        realUrl = realUrl?.replace(`{${key}}`, pathParams[key]);
      }
      config.url = realUrl;
    }

    const { data } = await this.axios.request({
      ...config,
      baseURL: this.options.apiHost,
      headers: {
        ...pickBy(config.headers, (i) => !!i),
      },
    });
    return data;
  }
}
