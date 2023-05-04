<template>
  <div class="page-index layout-container-1200">
    <div class="left mr-10">
      <a-affix :target="pageLayoutElement" :offsetTop="60">
        <AsideMenu class="aside-menu" />
      </a-affix>
    </div>
    <div class="center">
      <div class="layout-block">
        <div style="height: 1500px"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AsideMenu from './AsideMenu.vue'
import { inject } from 'vue'

const pageLayoutElement = inject<HTMLElement>('pageLayoutElement')

import UserApi from '@app/home-server/src/api/user'
import { userInfoState } from '@/state'
import { UserInfoModel } from '@app/home-model/user'

Object.assign(
  userInfoState,
  await UserApi.getUserInfo(new UserInfoModel({ avatar: '11', favContentType: '1' })),
)

console.log(userInfoState.sex())
</script>

<style lang="scss" scoped>
.page-index {
  position: relative;
  display: flex;

  .left {
    flex: 0 0 auto;
    min-width: 48px;
  }

  .center {
    flex: 1;
  }
}

//@media screen and (max-width: 768px) {
//  :deep(.aside-menu) {
//    position: absolute;
//
//    .arco-menu {
//      &:not(.arco-menu-collapsed) {
//        box-shadow: var(--app-shadow-1);
//      }
//    }
//  }
//}
</style>
