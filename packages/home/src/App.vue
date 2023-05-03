<template>
  <a-config-provider size="small">
    <router-view />
  </a-config-provider>
</template>

<script lang="ts" setup></script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  word-break: break-all;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
}

@import './style.scss';
@import './common/style/pc.scss';
@import './common/style/mobile.scss';
</style>
