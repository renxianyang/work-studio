<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'

onLaunch(() => {
  console.log('App Launch')
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>
<style lang="scss">
@import './common/styles/pc';
@import './common/styles/mobile';

page {
  --app-layout-header-height: 60px;
  --app-layout-left-aside-width: 200px;
  --app-layout-right-aside-width: 120px;
  --app-layout-block-radius: 4px;
}

.app-layout-block {
  padding: 10px;
  border-radius: var(--app-layout-block-radius);
  background: #fff;
}

page {
  user-select: text;
  //min-width: 320px;
}

uni-page-body {
  height: 100%;
}

view,
text,
image {
  box-sizing: border-box;
}
</style>
