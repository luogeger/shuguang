<template>
  <div class="yan">
      <img src="../../assets/pic/record1.png" alt="" @click='nextPage'>
  </div>
</template>
<script>
export default {
     methods:{
        nextPage(){
            this.$router.push('/baogao')
        }
    }
}
</script>
<style lang="less" scoped>
    .yan{
        width:100%;
        img{
           width:100%; 
        }
    }
</style>