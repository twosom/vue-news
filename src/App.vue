<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>


import ToolBar from "@/components/ToolBar";

export default {
  components: {
    ToolBar,
  },

}
</script>1

<style>
body {
  padding: 0;
  margin: 0;
  background-color: azure;
}

.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}

.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>
