import Index from '@pages/index/index.vue'
import Lifecycle from '@components/Lifecycle.vue'
import ComponentComm from '@pages/data/index.vue'
import Components from '@pages/builtInComponents/index.vue'
import Directives from '@components/Directives.vue'
import LogicReuse from '@components/LogicReuse.vue'
import Detail from '@components/Detail.vue'
import RouterCompt from '@components/RouterCompt.vue'
import KeepAlive from '@components/KeepAlive.vue'

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
    component: Index,
  },
  {
    path: '/lifecycle',
    name: 'lifecycle',
    meta: {
      title: '生命周期',
      keepAlive: true,
    },
    component: Lifecycle,
  },
  {
    path: '/componentComm',
    name: 'componentComm',
    meta: {
      title: '组件通信',
    },
    component: ComponentComm,
  },
  {
    path: '/components',
    name: 'components',
    meta: {
      title: '内置组件',
      keepAlive: true,
    },
    component: Components,
  },
  {
    path: '/directives',
    name: 'directives',
    meta: {
      title: '常用指令',
      keepAlive: false,
    },
    component: Directives,
  },
  {
    path: '/logicReuse',
    name: 'logicReuse',
    meta: {
      title: '逻辑复用',
      keepAlive: false,
    },
    component: LogicReuse,
  },
  {
    path: '/detail',
    name: 'detail',
    meta: {
      title: '详情组件',
    },
    component: Detail,
  },
  {
    path: '/router',
    component: RouterCompt,
    redirect:'/router/keepAlive',
    children: [
      {
        path: '/router/detail/:id',
        name: 'RouterDetail',
        meta: {
          title: '详情组件',
        },
        component: Detail,
      },
      {
        path: '/router/keepAlive',
        name: 'keepAlive',
        meta: {
          title: 'KeepAlive演示组件',
        },
        component: KeepAlive,
      },
    ],
    meta: {
      title: '路由演示',
    },
  },
]
