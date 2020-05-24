import request from '@/utils/request';

export function handleLogin(payload) {
  return request({
    url: '/api/login',
    method: 'POST',
    data: payload
  });
}
