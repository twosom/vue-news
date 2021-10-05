<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import ListItem from "@/components/ListItem";

export default {
  components: {
    ListItem
  },
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