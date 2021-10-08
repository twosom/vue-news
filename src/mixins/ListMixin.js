// mixin
import bus from "@/utils/bus";
import {mapActions, mapMutations} from "vuex";

export default {
    // 재사용할 컴포넌트 옵션
    methods: {
        ...mapActions([
            'FETCH_LIST'
        ]),
        ...mapMutations([
            'CLEAR_LIST'
        ])
    },
    created() {
        bus.$emit('start:spinner');
        setTimeout(() => {
            this.FETCH_LIST(this.$route.name)
                .then(() => {
                    console.log('fetched');
                    bus.$emit('end:spinner');
                })
                .catch(error => {
                    console.log(error);
                });
        }, 3000);
    },
    destroyed() {
        this.CLEAR_LIST();
    }
};