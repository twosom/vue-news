export default {

    SET_USER(state, user) {
        state.user = user;
    },

    SET_ITEM(state, item) {
        state.item = item;
    },

    CLEAR_USER(state) {
        state.user = {};
    },

    SET_LIST(state, list) {
        state.list = list;
    },

    CLEAR_LIST(state) {
        state.list = [];
    }
}
