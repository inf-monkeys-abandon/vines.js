export const DEFAULT_OPTIONS: VinesClientOptions = {
  apiHost: "https://vines.infmonkeys.com",
  apiKey: "",
  timeout: 30000,
};

export interface VinesClientOptions {
  /**
   * 服务器请求地址，默认值为：https://vines.infmonkeys.com
   */
  apiHost?: string;

  /**
   * vines api key
   */
  apiKey: string;

  /** 请求超时时间 **/
  timeout?: number;

  /**
   * 是否拒绝非法的 HTTPS 请求，默认为 true；如果是私有化部署的场景且证书不被信任，可以设置为 false
   */
  rejectUnauthorized?: boolean;
}
