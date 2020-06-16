import request from '@/utils/request';

export function login(payload) {
  return request({
    url: '/api/v1/login',
    method: 'POST',
    data: payload
  });
}

export function logout() {
  return request({
    url: '/api/v1/logout',
    method: 'POST'
  });
}

export function register(payload) {
  return request({
    url: '/api/v1/register',
    method: 'POST',
    data: payload
  });
}

export function getCourses(course) {
  return request({
    url: `/api/v1/courses/${course}`,
    method: 'GET'
  });
}
