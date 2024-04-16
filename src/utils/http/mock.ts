import MockAdapter from 'axios-mock-adapter';

import axios from './Axios';
import { isUseMock } from '@/utils/env';

const mock = new MockAdapter(axios);

// 是否开启mock
if (!isUseMock()) {
  mock.restore();
}

export default mock;
