import VueRouter from "vue-router";
import Vue from "vue";
import UserView from "@/views/UserView";
import ItemView from "@/views/ItemView";
import createListVue from '@/views/CreateListVue';


Vue.use(VueRouter);

export const router = new VueRouter({
    //TODO url # 제거
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            // path: url 주소
            path: '/news',
            name: 'news',
            component: createListVue('NewsView')
        },
        {
            path: '/ask',
            name: 'ask',
            component: createListVue('AskView')
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: createListVue('JobsView')
        },
        {
            path: '/user/:id',
            component: UserView
        },
        {
            path: '/item/:id',
            component: ItemView
        }
    ]
});

