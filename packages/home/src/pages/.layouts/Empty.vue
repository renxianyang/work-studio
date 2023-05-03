<template>
  <div class="empty-layout">
    <router-view />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.empty-layout {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
