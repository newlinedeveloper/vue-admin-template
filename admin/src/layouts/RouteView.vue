<template>
  <transition name="page-toggle">
    <keep-alive :include="'One'" v-if="multipage">
      <router-view />
    </keep-alive>
    <router-view v-else />
  </transition>
</template>

<script>
export default {
  name: "RouteView",
  computed: {
    multipage() {
      return this.$store.state.AppSetting.multipage;
    }
  }
};
</script>

<style scoped>
</style>