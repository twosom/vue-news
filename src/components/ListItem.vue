<template>
  <div>
    <ul class="news-list">
      <li v-for="(item, idx) in this.getList" :key="idx" class="post">

        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>

        <!-- 기타 정보 영역 -->
        <div>
          <!-- 타이틀 영역 -->
          <p class="news-title">

            <template v-if="item.domain">
              <a :href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link :to="`/item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>


          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link
                v-if="item.user"
                :to="`/user/${item.user}`" class="link-text">{{ item.user }}
            </router-link>
            <a :href="item.url" v-else class="link-text">
              {{ item.domain }}
            </a>
          </small>
        </div>

      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {

  computed: {
    ...mapGetters([
      'getList'
    ])
  },
  methods: {
    ...mapMutations([
      'CLEAR_LIST'
    ])
  },

  destroyed() {
    this.CLEAR_LIST();
  }
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  /* 세로에서 중앙정렬 */
  align-items: center;
  /* 가로에서 중앙정렬 */
  justify-content: center;
  color: #42b883;
}

.news-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>