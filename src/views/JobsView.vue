<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import ListItem from "@/components/ListItem";
import bus from "@/utils/bus";

export default {
  components: {
    ListItem
  },
  created() {
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.FETCH_JOBS()
          .then(() => {
            console.log('fetched');
            bus.$emit('end:spinner');
          })
          .catch(error => {
            console.log(error);
          });
    }, 3000);

  },

  methods: {
    ...mapActions([
      'FETCH_JOBS'
    ])
  }
}
</script>