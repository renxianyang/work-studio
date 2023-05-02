<template>
  <view class="header">
    <view class="header-inner"></view>
  </view>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.header {
  flex: 0 0 var(--app-layout-header-height);
  background: #fff;

  .header-inner {
    margin: auto;
    width: 100%;
    max-width: 1366px;
  }
}
</style>
