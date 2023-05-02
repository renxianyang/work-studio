<template>
  <view class="base-page-layout">
    <Header />

    <view class="sub-layout">
      <view class="left">
        <view class="app-layout-block" style="height: 200px">11</view>
      </view>
      <view class="main">
        <slot />
      </view>
      <view hidden class="right">
        <TabBar />
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import Header from './Header.vue'
import TabBar from './TabBar.vue'

onMounted(() => {
  console.log('layout mounted')
})
</script>

<style lang="scss" scoped>
.base-page-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #f2f3f5;

  & > .sub-layout {
    flex: 1;
  }
}

.sub-layout {
  display: flex;
  margin: 15px auto 10px;
  padding: 0 10px;
  width: 100%;
  max-width: 1366px;

  & > .main {
    flex: 1;
    border-radius: var(--app-layout-block-radius);
  }

  & > .left {
    flex: 0 0 var(--app-layout-left-aside-width);
    margin-right: 15px;
  }

  & > .right {
    flex: 0 0 var(--app-layout-right-aside-width);
    margin-left: 15px;
  }
}
</style>
