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

export function getLessons(payload) {
  return request({
    url: '/api/v1/lessons',
    method: 'GET',
    params: payload
  });
}

export function getLesson(id) {
  return request({
    url: `/api/v1/lessons/${id}`,
    method: 'GET'
  });
}

export function submitATest(payload) {
  return request({
    url: '/api/v1/save-test',
    method: 'POST',
    data: payload
  });
}

export function getListTest() {
  return request({
    url: '/api/v1/list-test',
    method: 'GET'
  });
}
