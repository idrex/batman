export default  [
  {
    _id:'0',
    name:'权限管理',
    icon: 'usergroup-add',
    path: '/auth',
    auth:15,
    children: [{
      _id:'0-0',
      name: '用户管理',
      auth:15,
      path: '/auth/users',
    },{
      _id:'0-1',
      name:'角色管理',
      auth:15,
      path: '/auth/role',
    }]
  }, {
      _id:'1',
      name: '图表',
      icon: 'heat-map',
      path: '/chart',
      children: [{
        _id:'1-0',
        name: '流程图',
        path: '/chart/flow'
      }, {
        _id:'1-1',
        name: '思维导图',
        path: '/chart/mind'
      }]
  },{
    _id:'2',
    name: '短链管理',
    icon: 'link',
    path: '/short-chain/list',
  }
]
