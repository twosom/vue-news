<template>
  <div>
    <section>
      <!-- 사용자 정보 -->
      <user-profile :info="getItem">
        <router-link slot="username" :to="`/user/${getItem.user}`">
          {{ this.getItem.user }}
        </router-link>
        <template slot="time">{{ 'Posted ' + this.getItem.time_ago }}</template>
      </user-profile>
    </section>


    <section>
      <h2>{{ this.getItem.title }}</h2>
    </section>


    <section>
      <!-- 질문 댓글 -->
      <div v-html="this.getItem.content"/>
    </section>
  </div>
</template>

<script>


import {mapActions, mapGetters} from "vuex";
import UserProfile from "@/components/UserProfile";

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters([
      'getItem'
    ])
  },
  created() {
    const itemId = this.$route.params.id;
    this.FETCH_ITEM(itemId);

  },
  methods: {
    ...mapActions([
      'FETCH_ITEM'
    ])
  }
}
</script>
