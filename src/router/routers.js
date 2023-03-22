export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '示例列表',
    },
    component: () => import('@pages/index/index.vue'),
  },
  {
    path:'/:city([a-zA-z]+)/home',
    component: () => import('@pages/index/index.vue'),
  },
  {
    path: '/lifecycle',
    name: 'lifecycle',
    meta: {
      title: '生命周期',
      keepAlive: true,
    },
    component: () => import('@components/Lifecycle.vue'),
  },
  {
    path: '/componentComm',
    name: 'componentComm',
    meta: {
      title: '组件通信',
    },
    component: () => import('@pages/data/index.vue'),
  },
  {
    path: '/components',
    name: 'components',
    meta: {
      title: '内置组件',
      keepAlive: true,
    },
    component: () => import('@pages/builtInComponents/index.vue'),
  },
  {
    path: '/directives',
    name: 'directives',
    meta: {
      title: '常用指令',
      keepAlive: false,
    },
    component: () => import('@components/Directives.vue'),
  },
  {
    path: '/logicReuse',
    name: 'logicReuse',
    meta: {
      title: '逻辑复用',
      keepAlive: false,
    },
    component: () => import('@components/LogicReuse.vue'),
  },
  {
    path: '/detail',
    name: 'detail',
    meta: {
      title: '详情组件',
    },
    component: () => import('@components/Detail.vue'),
  },
  {
    path: '/router',
    component: () => import('@components/RouterCompt.vue'),
    // redirect:'/router/keepAlive',
    children: [
      {
        path: '/router/detail/:type',
        name: 'RouterDetail',
        meta: {
          title: '详情组件',
        },
        component: () => import('@components/Detail.vue'),
      },
      {
        path: '/router/keepAlive',
        name: 'keepAlive',
        meta: {
          title: 'KeepAlive演示组件',
        },
        component: () => import('@components/KeepAlive.vue'),
      },
    ],
    meta: {
      title: '路由演示',
    },
  },
  {
    path:'/:city(jiyuan|zhoukou|xinyang)',
    component: () => import('@pages/index/index.vue'),
  }
]
