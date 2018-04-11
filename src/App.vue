<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

@import './assets/style/resetVux.less';

html, body {
  background-color: #f4f4f4;
  height:100%;
  font-size:62.5%;
}
</style>
