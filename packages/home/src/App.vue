<template>
  <a-config-provider size="small">
    <Suspense>
      <router-view />
    </Suspense>
  </a-config-provider>
</template>

<script lang="ts" setup></script>

<style lang="scss">
@import './common/style/reset.scss';

#app {
  min-width: 320px;
}

@import './style.scss';
@import './common/style/pc.scss';
@import './common/style/mobile.scss';
</style>
