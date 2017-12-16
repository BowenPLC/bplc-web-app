import Vue from 'vue';
import Router from 'vue-router';
import IO from '@/components/IO';
import Configuration from '@/components/Configuration';
import Programs from '@/components/Programs';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'IO',
            component: IO,
        },
        {
            path: '/IO',
            name: 'IO',
            component: IO,
        },
        {
            path: '/Configuration',
            name: 'Configuration',
            component: Configuration,
        },
        {
            path: '/Programs',
            name: 'Programs',
            component: Programs,
        },
    ],
});
