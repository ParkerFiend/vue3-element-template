import { Api } from './api';
import mock from '@/utils/http/mock';

import { mockSuccessRes } from '../base';

mock.onGet(Api.getData).reply(mockSuccessRes({ string: 123 }));
