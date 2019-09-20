'use strict';

const moment = require('moment');
// 转Int
exports.toInt = string => {
  if (typeof string === 'number') return string;
  if (!string) return string;
  return parseInt(string) || 0;
};
// 格式化时间
exports.formatTime = time => moment(time).format('YYYY-MM-DD hh:mm:ss');

// 处理成功响应
exports.success = ({ ctx, res = null, msg = '请求成功' }) => {
  ctx.body = {
    status: 'ok',
    code: 0,
    data: res,
    msg,
  };
  ctx.status = 200;
};

// 处理成功响应（独显）
exports.result = ({ ctx, res = null }) => {
  ctx.body = res;
  ctx.status = 200;
};
