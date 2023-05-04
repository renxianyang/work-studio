<template>
  <div ref="pageLayoutElement" class="base-layout">
    <a-affix :target="pageLayoutElement" :offsetTop="0" class="header">
      <Header />
    </a-affix>
    <div class="main mt-15 pl-10 pr-10">
      <router-view />
    </div>
    <TabBar class="tabbar" />
  </div>
</template>

<script lang="ts" setup>
import Header from './Header.vue'
import TabBar from './TabBar.vue'
import { provide } from 'vue'

const pageLayoutElement = ref<HTMLElement | null>(null)
provide('pageLayoutElement', pageLayoutElement)
</script>

<style lang="scss" scoped>
.base-layout {
  width: 100%;
  height: 100%;
  overflow: auto;

  background: #f2f3f5;

  :deep(.header) {
    .arco-affix {
      z-index: 11111;
    }
  }
}
</style>
