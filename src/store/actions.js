import {fetchAskList, fetchCommentItem, fetchJobsList, fetchListItem, fetchNewsList, fetchUserInfo} from "@/api";

export default {
    FETCH_NEWS({commit}) {
        return fetchNewsList()
            .then(({data}) => {
                commit('SET_NEWS', data);
            })
            .catch(error => {
                console.log(error);
            });
    },

    FETCH_JOBS({commit}) {
        return fetchJobsList()
            .then(response => {
                commit('SET_JOBS', response.data);
                return response;
            })
            .catch(error => {
                console.log(error);
            })
    },

    FETCH_ASK({commit}) {
        return fetchAskList()
            .then(({data}) => {
                commit('SET_ASK', data);
            })
            .catch(error => {
                console.log(error);
            });
    },

    FETCH_USER({commit}, username) {
        return fetchUserInfo(username)
            .then(({data}) => {
                commit('SET_USER', data);
            })
            .catch(error => {
                console.log(error);
            });
    },

    FETCH_ITEM({commit}, itemId) {
        return fetchCommentItem(itemId)
            .then(({data}) => {
                commit('SET_ITEM', data);
            })
            .catch(error => {
                console.log(error);
            })
    },

    // #2
    FETCH_LIST({commit}, pageName) {
        return fetchListItem(pageName)
            .then(response => {
                commit('SET_LIST', response.data);
                return response;
            })
            .catch(error => {
                console.log(error);
            })
    }
}