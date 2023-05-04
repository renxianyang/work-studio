<template>
  <div class="base-layout-header pl-10 pr-10">
    <div class="header-inner layout-container-1200">
      <div class="left mr-15">
        <router-link to="/" class="flex f-aic">
          <img src="/vite.svg" class="logo" style="width: 40px" />
          <div class="ml-10">
            <div class="mt-4 fz-15 color-333">摸鱼客</div>
            <div class="mt-4 text-color-1">MoYuKe.com</div>
          </div>
        </router-link>
      </div>
      <div class="center">
        <a-select
          v-model="userInfoState.favContentType"
          size="mini"
          class="fav-content-type-selector"
        >
          <a-option value="99">综合</a-option>
          <a-option value="1">男频</a-option>
          <a-option value="2">女频</a-option>
        </a-select>
      </div>
      <div class="right">
        <a-popover trigger="click" position="tr">
          <a-avatar :image-url="userInfoState.avatar" class="cursor-pointer" />
          <template #content>
            <p>Here is the text content</p>
            <p>Here is the text content</p>
          </template>
        </a-popover>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { userInfoState } from '@/state'
</script>

<style lang="scss" scoped>
:deep(.fav-content-type-selector) {
  padding: 0 5px;
  width: 55px;

  .arco-select-view-suffix {
    padding-left: 5px;
  }
}

.base-layout-header {
  display: flex;
  align-items: center;
  height: 60px;
  background: #fff;
  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;

  .header-inner {
    display: flex;
    align-items: center;

    .left {
    }

    .center {
      flex: 1;
    }

    .left {
    }
  }
}
</style>
