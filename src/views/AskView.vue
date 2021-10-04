<template>
  <div>
    <p v-for="ask in this.getAskList" :key="ask.id">
      <router-link :to="`/item/${ask.id}`">{{ ask.title }}</router-link>
      <small>{{ ask.time_ago }} by {{ ask.user }}</small>
    </p>
  </div>
</template>

<script>


import {mapActions, mapGetters} from "vuex";

export default {
  created() {
    this.FETCH_ASK();
  },
  computed: {
    ...mapGetters([
      'getAskList'
    ])
  },
  methods: {
    ...mapActions([
      'FETCH_ASK'
    ])
  }
}
</script>

<style scoped>

</style>