import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
let routes = [

{
    path: "/",
    name: "index",
    meta: {
        title: "Vue",
    },

    component: () =>
        import("@pages/index/index.vue"),
}

];

let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: () => ({ y: 0 }),
    routes: routes,
 
});

// router.beforeEach((to, from, next) => {

//     const title = to.meta && to.meta.title;
//     if (title) {
//         document.title = title;
//     }
//     next()
// });

export default router;