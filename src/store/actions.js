import {fetchAskList, fetchCommentItem, fetchJobsList, fetchList, fetchNewsList, fetchUserInfo} from "@/api";

export default {
    FETCH_NEWS({commit}) {
        fetchNewsList()
            .then(({data}) => {
                commit('SET_NEWS', data);
            })
            .catch(error => {
                console.log(error);
            });
    },

    FETCH_JOBS({commit}) {
        fetchJobsList()
            .then(response => {
                commit('SET_JOBS', response.data);
                return response;
            })
            .catch(error => {
                console.log(error);
            })
    },

    FETCH_ASK({commit}) {
        fetchAskList()
            .then(({data}) => {
                commit('SET_ASK', data);
            })
            .catch(error => {
                console.log(error);
            });
    },

    FETCH_USER({commit}, username) {
        fetchUserInfo(username)
            .then(({data}) => {
                commit('SET_USER', data);
            })
            .catch(error => {
                console.log(error);
            });
    },

    FETCH_ITEM({commit}, itemId) {
        fetchCommentItem(itemId)
            .then(({data}) => {
                commit('SET_ITEM', data);
            })
            .catch(error => {
                console.log(error);
            })
    },

    FETCH_LIST({commit}, pageName) {
        fetchList(pageName)
            .then(({data}) => {
                commit('SET_LIST', data);
            })
            .catch(error => {
                console.log(error);
            })
    }
}