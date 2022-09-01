import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import routers from './routers';
// import routersStatic from './routersStatic';

let router = new Router({
    mode: 'history',
    linkActiveClass:'secondary',
    base: process.env.BASE_URL,
    scrollBehavior: () => ({ y: 0 }),
    routes: routers,
    // routes: routersStatic,

});

router.beforeEach((to, from, next) => {
    const title = to.meta && to.meta.title;
    if (title) {
        document.title = title;
    }
    next();
});

export default router;