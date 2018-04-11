<template>
  <div class="health">
      <img src="../../assets/pic/health1.png" alt="">
      <img src="../../assets/pic/health2.png" alt="" @click='nextPage1()'>
      <img src="../../assets/pic/health3.png" alt="" @click='nextPage2()'>
      <img src="../../assets/pic/health4.png" alt="" @click='nextPage3()'>
  </div>
</template>

<script>
    export default {
        methods:{
            nextPage1(){
                this.$router.push('/jianyan');
            },
            nextPage2(){
                this.$router.push('/jiancha');
            },
            nextPage3(){
                
                this.$router.push('/qingdan');
            }
        }
    }
</script>
<style lang="less" scoped>
    .health{
        width:100%;
        img {
           width:100%; 
        }
    }
</style>

