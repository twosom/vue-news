<template>
  <div>
    <ul class="jobs-list">
      <li v-for="item in this.getJobsList" class="jobs">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>


        <!-- 기타 정보 영역 -->
        <div>
          <p class="job-title">
            <a :href="item.url">
              {{ item.title }}
            </a>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <a :href="item.url">
              {{ item.domain }}
            </a>
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

.jobs-list {
  margin: 0;
  padding: 0;
}

.jobs {
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

.job-title {
  margin: 0;
}

.link-text {
  color: #828282;
}

</style>