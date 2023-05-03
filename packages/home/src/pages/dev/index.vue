<template>
  <div>
    <a-date-picker style="width: 200px;" />
    <div>
      <a-pagination
        :total="50"
        show-total
        show-jumper
        show-page-size
        style="margin-top: 20px; margin-bottom: 20px"
      />
    </div>
    <a-space :size="20" style="margin-bottom: 20px">
      <a-range-picker style="width: 300px" />
      <a-time-picker type="time-range" style="width: 300px" />
      <a-popconfirm content="Are you sure you want to delete?">
        <a-button type="primary">Popconfirm</a-button>
      </a-popconfirm>
    </a-space>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
