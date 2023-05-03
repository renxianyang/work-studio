<template>
  <div class="page-index layout-container-1200">
    <div class="left">
      <div class="layout-block">
        <div style="width: 200px; height: 200px"></div>
      </div>
    </div>
    <div class="center">
      <div class="layout-block">
        <div style="width: 200px; height: 500px"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.page-index {
  display: flex;

  .left {
    flex: 0 0 auto;
    margin-right: 20px;
  }

  .center {
    flex: 1;
  }
}
</style>
