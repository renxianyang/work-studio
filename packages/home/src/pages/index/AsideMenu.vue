<template>
  <div>
    <a-menu
      :default-open-keys="['0']"
      :default-selected-keys="['0_0']"
      show-collapse-button
      breakpoint="md"
    >
      <a-sub-menu key="0">
        <template #icon>
          <IconApps />
        </template>
        <template #title>Navigation 1</template>
        <a-menu-item key="0_0">Menu 1</a-menu-item>
        <a-menu-item key="0_1">Menu 2</a-menu-item>
        <a-menu-item key="0_2">Menu 3</a-menu-item>
        <a-menu-item key="0_3">Menu 4</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="1">
        <template #icon>
          <IconApps />
        </template>
        <template #title>Navigation 2</template>
        <a-menu-item key="1_0">Menu 1</a-menu-item>
        <a-menu-item key="1_1">Menu 2</a-menu-item>
        <a-menu-item key="1_2">Menu 3</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script lang="ts" setup>
import { IconApps } from '@arco-design/web-vue/es/icon'
</script>

<style lang="scss" scoped>
:deep(.arco-menu) {
  padding-bottom: 40px;

  &.arco-menu-collapsed {
    border-radius: 10px;
  }

  &:not(.arco-menu-collapsed) {
    width: 200px;
  }

  .arco-menu-item-inner {
    font-size: 12px;
  }

  .arco-menu-has-icon {
    .arco-menu-icon {
      margin-right: 6px;
      font-size: 16px;
    }
  }
}
</style>
