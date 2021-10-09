import {fetchAskList, fetchCommentItem, fetchJobsList, fetchListItem, fetchNewsList, fetchUserInfo} from "@/api";

export default {
    async FETCH_NEWS({commit}) {
        const response = await fetchNewsList();
        commit('SET_LIST', response.data);
        return response;
    },

    async FETCH_JOBS({commit}) {
        try {
            const response = await fetchJobsList();
            commit('SET_LIST', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },

    async FETCH_ASK({commit}) {
        const response = await fetchAskList();
        commit('SET_LIST', response.data);
        return response;
    },

    async FETCH_USER({commit}, username) {
        const response = await fetchUserInfo(username);
        commit('SET_USER', response.data);
        return response;
    },

    async FETCH_ITEM({commit}, itemId) {
        const response = await fetchCommentItem(itemId);
        commit('SET_ITEM', response.data);
        return response;
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