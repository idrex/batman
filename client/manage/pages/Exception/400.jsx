import React from 'react';
import { Link } from 'dva/router';
import Exception from '../../components/Exception';

const Exception400 = () => (
  <Exception
    type="403"
    desc={'抱歉,管理员还未分配权限'}
    linkElement={Link}
  />
);

export default Exception400;
