<template>
  <div class="record">
    <div class="record-space">
      <div class="space-img">
        <img src="../assets/imgs/empty.png" alt="暂无记录">
        <p>暂无问诊记录</p>
        <p>医生们正在等候为您服务哦！</p>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
      
    }
</script>
<style lang="less" scoped>

  .record-space{
    background-color: #F4F4F4;
    // position: relative;
    .space-img{
      position: fixed;
      left:50%;
      top:65%;
      transform: translate(-50%,-50%);
      text-align: center;
      color:#999;
      font-size:14px;
      img {
        width:55%;
      }
    }
  }
</style>
