<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem";

export default {
  components: {
    ListItem,
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