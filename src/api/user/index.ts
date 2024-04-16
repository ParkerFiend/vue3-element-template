import request from '@/utils/http/request';
import { Api } from './api';

import type { ApiRes } from '../base';

import './mock';

/**
 * 获取数据
 */
export function getData(): ApiRes<{ str: string }> {
  return request.get(Api.getData);
}
