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
export class Request {
  private baseURL: string;
  private timeout: number;

  constructor(baseURL: string = BASE_URL, timeout: number = TIMEOUT) {
    this.baseURL = baseURL;
    this.timeout = timeout;
  }

  // 请求拦截器
  private async requestInterceptor(config: RequestConfig): Promise<RequestConfig> {
    // 在这里添加请求前的操作，例如添加认证头
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
      config.headers = {
        ...config.headers,
        token,
      };
    }
    return config;
  }

  // 响应拦截器
  private async responseInterceptor(responseData: ApiResponse): Promise<any> {
    // 在这里添加对响应数据的操作，例如格式化数据
    if (responseData && responseData.success) {
      return responseData;
    } else {
      return Promise.reject(new Error(responseData.message || '请求失败'));
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

      // 尝试解析响应数据（即使状态码不是 200）
      let responseData: ApiResponse;
      try {
        responseData = await response.json();
      } catch {
        // 如果无法解析 JSON，使用默认错误信息
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        throw new Error('响应数据格式错误');
      }

      // 如果状态码不是 200，但能解析 JSON，返回解析的数据
      if (!response.ok) {
        // 如果响应中有错误信息，使用它
        const errorMessage = responseData.message || `HTTP error! status: ${response.status}`;
        return Promise.reject(new Error(errorMessage));
      }

      // 响应拦截
      return await this.responseInterceptor(responseData);
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
