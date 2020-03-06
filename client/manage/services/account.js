//用户登录
import request from '../utils/request';
export async function login(params) {
  return request('/api/manage/login', {
    method: 'POST',
    body: params,
  });
}

// 用户退出
export async function logout(params) {
  return request('/api/user/access/logout', {
    method: 'POST',
    body: params,
  });
}

// 获取单前用户信息
export async function getAccount() {
  return request('/api/manage/account', {
    method: 'GET',
  });
}

