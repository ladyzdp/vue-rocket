import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import routers from './routers';

let router = new Router({
    // mode: 'hash',
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: () => ({ y: 0 }),
    routes: routers,

});

router.beforeEach((to, from, next) => {

    const title = to.meta && to.meta.title;
    if (title) {
        document.title = title;
    }
    next();
});

export default router;