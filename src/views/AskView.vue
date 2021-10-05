<template>
  <div>
    <ul class="ask-list">
      <li v-for="item in this.getAskList" class="ask">
        <!--포인트 영역-->
        <div class="points">
          {{ item.points }}
        </div>


        <!-- 기타 정보 영역 -->
        <div>
          <p>
            <router-link :to="`/item/${item.id}`">
              {{ item.title }}
            </router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
          </small>


        </div>

      </li>
    </ul>
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

.ask-list {
  margin: 0;
  padding: 0;

}

.ask {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
}


.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.link-text {
  color: #828282;
}

</style>