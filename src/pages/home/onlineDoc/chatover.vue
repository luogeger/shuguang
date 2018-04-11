<template>
  <div class="yan">
        <!-- <img src="../../assets/pic/chat-over.png" alt="" @click="nextPage"> -->
  </div>
</template>
<script>
import { XButton } from 'vux'
export default {
    components: {
        XButton 
    },
    methods:{
        nextPage(){
           this.$router.push('/rate'); 
        }
    }
}
</script>
<style lang="less" scoped>
    .yan{
        width:100%;
        height:100%;
        img{
           width:100%; 
        }
        .weui-btn_default{
            backgroud-color:#fff;
        }
    }
</style>