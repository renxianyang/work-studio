<template>
  <BasePageLayout>
    <view class="app-layout-block">ui</view>

    <input v-model="input1" placeholder="请输入密码" />
  </BasePageLayout>
</template>

<script lang="ts" setup>
import BasePageLayout from '@/common/layouts/BasePageLayout/index.vue'

const input1 = ref('')
</script>

<style lang="scss" scoped></style>
