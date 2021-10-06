<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>


import ListItem from "@/components/ListItem";
import {mapActions} from "vuex";
import bus from "@/utils/bus";

export default {
  components: {
    ListItem,
  },
  methods: {
    ...mapActions([
      'FETCH_ASK'
    ])
  },
  created() {
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.FETCH_ASK()
          .then(() => {
            console.log('fetched');
            bus.$emit('end:spinner');
          })
          .catch(error => {
            console.log(error);
          });
    }, 3000);

  }
}
</script>