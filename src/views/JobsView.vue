<template>
  <div>
    <p v-for="jobs in this.getJobsList" :key="jobs.id">
      <a :href="jobs.url">{{ jobs.title }}</a>
      <small>{{jobs.time_ago}} by {{jobs.domain}}</small>
    </p>
  </div>
</template>

<script>


import {mapActions, mapGetters} from "vuex";

export default {
  created() {
    this.FETCH_JOBS();
  },
  computed: {
    ...mapGetters([
      'getJobsList'
    ])
  },
  methods: {
    ...mapActions([
      'FETCH_JOBS'
    ])
  }
}
</script>

<style scoped>

</style>