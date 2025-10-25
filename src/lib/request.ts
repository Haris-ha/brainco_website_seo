// API请求工具类

type RequestConfig = {
  method?: string;
  url: string;
  data?: any;
  headers?: Record<string, string>;
};

type ApiResponse<T = any> = {
  success: boolean;
  data: T;
  message?: string;
};

// 基础URL配置
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

// 请求超时时间
const TIMEOUT = 5000;

// 创建请求实例
class Request {
  private baseURL: string;
  private timeout: number;

  constructor(baseURL: string = BASE_URL, timeout: number = TIMEOUT) {
    this.baseURL = baseURL;
    this.timeout = timeout;
  }

  // 请求拦截器
  private async requestInterceptor(config: RequestConfig): Promise<RequestConfig> {
    // 在这里添加请求前的操作，例如添加认证头
    console.warn('Request config:', config);
    return config;
  }

  // 响应拦截器
  private async responseInterceptor(response: Response): Promise<any> {
    const data: ApiResponse = await response.json();

    // 在这里添加对响应数据的操作，例如格式化数据
    if (data && data.success) {
      return data;
    } else {
      return Promise.reject(data.message || '请求失败');
    }
  }

  // 统一请求方法
  private async request<T = any>(config: RequestConfig): Promise<ApiResponse<T>> {
    // 请求拦截
    const interceptedConfig = await this.requestInterceptor(config);

    const url = `${this.baseURL}${interceptedConfig.url}`;
    const method = interceptedConfig.method || 'GET';

    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...interceptedConfig.headers,
      },
    };

    if (method !== 'GET' && interceptedConfig.data) {
      options.body = JSON.stringify(interceptedConfig.data);
    }

    // 创建超时控制
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);
    options.signal = controller.signal;

    try {
      const response = await fetch(url, options);
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // 响应拦截
      return await this.responseInterceptor(response);
    } catch (error) {
      clearTimeout(timeoutId);
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          return Promise.reject(new Error('请求超时'));
        }
        return Promise.reject(error);
      }
      return Promise.reject(new Error('请求失败'));
    }
  }

  // GET 请求
  async get<T = any>(url: string, config?: Partial<RequestConfig>): Promise<ApiResponse<T>> {
    return this.request<T>({
      method: 'GET',
      url,
      ...config,
    });
  }

  // POST 请求
  async post<T = any>(
    url: string,
    data?: any,
    config?: Partial<RequestConfig>,
  ): Promise<ApiResponse<T>> {
    return this.request<T>({
      method: 'POST',
      url,
      data,
      ...config,
    });
  }

  // PUT 请求
  async put<T = any>(
    url: string,
    data?: any,
    config?: Partial<RequestConfig>,
  ): Promise<ApiResponse<T>> {
    return this.request<T>({
      method: 'PUT',
      url,
      data,
      ...config,
    });
  }

  // DELETE 请求
  async delete<T = any>(url: string, config?: Partial<RequestConfig>): Promise<ApiResponse<T>> {
    return this.request<T>({
      method: 'DELETE',
      url,
      ...config,
    });
  }
}

// 导出默认实例
const request = new Request();
export default request;
