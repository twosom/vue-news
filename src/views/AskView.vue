<template>
  <div>
    <list-item></list-item>
    <!--    <ul class="ask-list">-->
    <!--      <li v-for="item in this.getAskList" class="ask">-->
    <!--        &lt;!&ndash;포인트 영역&ndash;&gt;-->
    <!--        <div class="points">-->
    <!--          {{ item.points }}-->
    <!--        </div>-->


    <!--        &lt;!&ndash; 기타 정보 영역 &ndash;&gt;-->
    <!--        <div>-->
    <!--          <p>-->

    <!--          </p>-->
    <!--          <small class="link-text">-->
    <!--            {{ item.time_ago }} by-->
    <!--            <router-link :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>-->
    <!--          </small>-->


    <!--        </div>-->

    <!--      </li>-->
    <!--    </ul>-->
  </div>
</template>

<script>


// import {mapActions, mapGetters} from "vuex";
import ListItem from "@/components/ListItem";

export default {
  components: {
    ListItem,
  }
  // created() {
  //   this.FETCH_ASK();
  // },
  // computed: {
  //   ...mapGetters([
  //     'getAskList'
  //   ])
  // },
  // methods: {
  //   ...mapActions([
  //     'FETCH_ASK'
  //   ])
  // }
}
</script>