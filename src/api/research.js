import request from '@/utils/request';

export function research(payload) {
  return request({
    url: '/api/v1/research',
    method: 'GET',
    params: payload
  });
}
