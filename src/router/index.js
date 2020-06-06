import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'main_page',
        beforeEnter: (to, from, next) => {
            next();
        },
        component: () => import(/* webpackChunkName: "Main" */ '../views/Main'),
    },
    {
        path: '*',
        component: () => import(/* webpackChunkName: "PageNotFound" */ '../views/PageNotFound.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
