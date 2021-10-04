<template>
  <div>
    <p v-for="(news, index) in this.getNewsList" :key="index + news.id">
      <a :href="news.url">{{ news.title }}</a>
      <small>
        {{ news.time_ago }} by
        <router-link :to="`/user/${news.user}`">{{ news.user }}</router-link>
      </small>
    </p>


  </div>
</template>

<script>


import {mapActions, mapGetters} from "vuex";

export default {

  created() {
    this.FETCH_NEWS();
  },
  computed: {
    ...mapGetters([
      'getNewsList'
    ])
  },
  methods: {
    ...mapActions([
      'FETCH_NEWS'
    ])
  }
}
</script>

<style scoped>

</style>