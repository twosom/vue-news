<template>
  <div>
    <p>name : {{ this.getUserInfo.id }}</p>
    <p>karma : {{ this.getUserInfo.karma }}</p>
    <p>created : {{ this.getUserInfo.created }}</p>
  </div>
</template>

<script>

import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
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