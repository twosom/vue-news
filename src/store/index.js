import Vuex from 'vuex';
import Vue from "vue";
import mutations from "@/store/mutations";
import actions from "@/store/actions";

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: [],
        user: {},
        item:{},
        list: []
    },
    getters: {
        getAskList: state => state.ask,
        getNewsList: state => state.news,
        getJobsList: state => state.jobs,
        getUserInfo: state => state.user,
        getItem: state => state.item,
        getList: state => state.list,
    },
    mutations: mutations,
    actions: actions
});