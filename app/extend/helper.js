import moment from 'moment';
// 转Int
export const toInt = string => {
  if (typeof string === 'number') return string;
  if (!string) return string;
  return parseInt(string) || 0;
};
// 格式化时间
export const formatTime = time => moment(time).format('YYYY-MM-DD hh:mm:ss');

// 处理成功响应
export const success = ({ ctx, res = null, msg = '请求成功' }) => {
  ctx.body = {
    status: 'ok',
    code: 0,
    data: res,
    msg,
  };
  ctx.status = 200;
};

// 处理警告响应
export const warning = ({ ctx, code = 422, msg = '请求成功' }) => {
  ctx.body = {
    status: 'error',
    code,
    msg,
  };
  ctx.status = code;
};

// 处理成功响应（独显）
export const result = ({ ctx, res = null }) => {
  ctx.body = res;
  ctx.status = 200;
};
