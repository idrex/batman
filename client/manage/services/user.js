import request from '../utils/request';
// 注册用户
export async function createUser(params) {
  return request('/api/user/register', {
    method: 'POST',
    body: params,
  });
}
// 获取注册用户列表
export async function getUserList(params) {
  return request('/api/user', {
    method: 'GET',
    body: params,
  });
}

//更新用户状态
export async function updateUser(params) {
  return request(`/api/user/${params._id}`, {
    method: 'PUT',
    body: params,
  });
}
//删除用户
export async function removeUser(params) {
  return request(`/api/user/${params._id}`, {
    method: 'DELETE',
    body: params,
  });
}
