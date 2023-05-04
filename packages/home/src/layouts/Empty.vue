<template>
  <div ref="pageLayoutElement" class="empty-layout">
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import { provide } from 'vue'

const pageLayoutElement = ref<HTMLElement | null>(null)
provide('pageLayoutElement', pageLayoutElement)
</script>

<style lang="scss" scoped>
.empty-layout {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
