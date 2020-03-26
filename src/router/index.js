import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'main_page',
        beforeEnter: (to, from, next) => {
            next({ name: 'tasks_page' });
        },
        component: () => import('../views/Main'),
    },
    {
        path: '/tasks',
        name: 'tasks_page',
        component: () => import('../views/Notes/Notes'),
    },
    {
        path: '/tasks/create',
        name: 'create_task',
        component: () => import('../views/Notes/Edit'),
    },
    {
        path: '/tasks/edit/:id',
        name: 'edit_task',
        component: () => import('../views/Notes/Edit'),
    },
    {
        path: '*',
        component: () => import('../views/PageNotFound.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
