<template>
  <div>
    <user-profile :info="this.getUserInfo">
      <div slot="username">{{ this.getUserInfo.id }}</div>
      <span slot="time">{{ 'Joined ' + this.getUserInfo.created }}, </span>
      <span slot="karma">{{ this.getUserInfo.karma }}</span>
    </user-profile>
  </div>
</template>

<script>

import {mapActions, mapGetters, mapMutations} from "vuex";
import UserProfile from "@/components/UserProfile";


export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters([
      'getUserInfo'
    ])
  },
  created() {
    const username = this.$route.params.id;
    this.FETCH_USER(username);
  },
  methods: {
    ...mapActions([
      'FETCH_USER'
    ]),
    ...mapMutations([
      'CLEAR_USER'
    ])
  },
  destroyed() {
    this.CLEAR_USER();
  }
}
</script>

<style scoped>

</style>