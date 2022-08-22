export default [
    {
        path: "/",
        name: "index",
        meta: {
            title: "Index",
        },
        component: () => import("@pages/index/index.vue"),
    },
    {
        path: "/lifecycle",
        name: "lifecycle",
        meta: {
            title: "生命周期",
            keepAlive: true
        },
        component: () => import("@components/Lifecycle.vue"),
    },
    {
        path: "/componentComm",
        name: "componentComm",
        meta: {
            title: "组件通信",
        },
        component: () => import("@pages/data/index.vue"),
    },
    {
        path: "/components",
        name: "components",
        meta: {
            title: "内置组件",
            keepAlive: true
        },
        component: () => import("@pages/builtInComponents/index.vue"),
    }, {
        path: "/directives",
        name: "directives",
        meta: {
            title: "常用指令",
            keepAlive: false
        },
        component: () => import("@components/Directives.vue"),
    }, {
        path: "/logicReuse",
        name: "logicReuse",
        meta: {
            title: "逻辑复用",
            keepAlive: false
        },
        component: () => import("@components/LogicReuse.vue"),
    }, {
        path: "/detail",
        name: "detail",
        meta: {
            title: "详情组件",
        },
        component: () => import("@components/Detail.vue"),
    }

];