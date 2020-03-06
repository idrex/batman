export default [
  {
    path: '/home',
    redirect: '/system/user',
  },
  {
    path: '/system',
    name: 'System',
    icon: 'crown',
    models: ['sytemUser', 'systemRole'],
    authority: ['admin'],
    routes: [
      {
        path: '/system/user',
        name: 'SystemUser',
        icon: 'smile',
        component: () => import('../pages/System/User'),
        authority: ['admin'],
      },
      {
        path: '/system/role',
        name: 'SystemRole',
        icon: 'smile',
        component: () => import('../pages/System/Role'),
        authority: ['admin'],
      },
    ],
  },
  {
    path: '/shoplist',
    name: 'System',
    icon: 'crown',
    authority: ['admin'],
    component: () => import('../pages/System/Role'),
  },
]
