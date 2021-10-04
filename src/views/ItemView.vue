<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${this.getItem.user}`">
            {{ this.getItem.user }}
          </router-link>

          <div class="time">
            {{ this.getItem.time_ago }}
          </div>
        </div>
      </div>
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

export default {

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

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.fa-user {
  font-size: 2.5rem;
}

.user-description {
  padding-left: 8px;
}

.time {
  font-size: 0.8rem;
}

</style>