<template>
  <div class="base-layout">
    <Header />
    <div class="main mt-20">
      <router-view />
    </div>
    <TabBar class="tabbar" />
  </div>
</template>

<script lang="ts" setup>
import Header from './Header.vue'
import TabBar from './TabBar.vue'
</script>

<style lang="scss" scoped>
.base-layout {
  width: 100%;
  height: 100%;
  overflow: auto;

  background: #f2f3f5;
}
</style>
