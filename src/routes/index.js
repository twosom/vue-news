import VueRouter from "vue-router";
import Vue from "vue";
import UserView from "@/views/UserView";
import ItemView from "@/views/ItemView";
import bus from "@/utils/bus";
import {store} from "@/store";
import NewsView from "@/views/NewsView";
import AskView from "@/views/AskView";
import JobsView from "@/views/JobsView";


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
            // component: createListVue('NewsView'),
            component: NewsView,
            // beforeEnter : 특정 url 로 접근할 때 인증정보가 있는지 없는지 확인할 때 가장 많이 쓰임
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_NEWS', to.name)
                    .then(() => next())
                    .catch(error => {
                        console.log(error);
                    });
            }
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            // component: createListVue('AskView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_ASK', to.name)
                    .then(() => next())
                    .catch(error => {
                        console.log(error);
                    });
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            // component: createListVue('JobsView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_JOBS', to.name)
                    .then(() => next())
                    .catch(error => {
                        console.log(error);
                    });
            }
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

