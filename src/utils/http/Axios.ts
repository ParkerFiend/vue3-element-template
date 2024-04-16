import axios from 'axios';
import { getAppEnvConfig } from '@/utils/env';
import type { AxiosResponse } from 'axios';
import { ContentTypeEnum } from '@/enums/httpEnum';
import { ElMessage } from 'element-plus';

const baseConfig = {
  timeout: 15000,
  withCredentials: true,
  headers: {
    'Content-Type': ContentTypeEnum.JSON,
  },
};

const instance = axios.create({
  ...baseConfig,
  baseURL: getAppEnvConfig().apiUrl,
});

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 额外配置处理
    return config;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做点什么
    const { data } = response;
    if (data) {
      // 返回数据格式
      if (data.errCode && data.errCode !== 0) {
        // 根据规则进行报错提示
        ElMessage.error(data.errMsg);
        return Promise.reject(data);
      }

      return data;
    }

    return Promise.reject(response);
  },
  (error) => {
    const { message } = error;
    if (/^timeout/.test(message)) {
      ElMessage.error('请求超时，请稍后再试');
    }
    Promise.reject(error);
  },
);

export default instance;
