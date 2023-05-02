<template>
  <BasePageLayout>
    <view class="app-layout-block">
      <hd-tag :value="value" type="info"></hd-tag>
      <hd-tag :value="value" type="primary"></hd-tag>
      <hd-tag :value="value" type="error"></hd-tag>
      <hd-tag :value="value" type="warning"></hd-tag>
      <hd-tag :value="value" type="success" size="large"></hd-tag>

      <hd-button type="default">默认按钮</hd-button>
      <hd-button type="primary">主要按钮</hd-button>
      <hd-button type="error" size="large">危险按钮</hd-button>
      <hd-button type="warning" size="mini">警告按钮</hd-button>
      <hd-button type="success" size="small">成功按钮</hd-button>
    </view>
  </BasePageLayout>
</template>

<script lang="ts" setup>
import BasePageLayout from '@/common/layouts/BasePageLayout/index.vue'

const value = ref('默认')
</script>

<style lang="scss" scoped></style>
