import { Api } from './api';
import mock from '@/utils/http/mock';

mock.onGet(Api.getData).reply(200, {
  errCode: 0,
  data: { string: '123' },
});
