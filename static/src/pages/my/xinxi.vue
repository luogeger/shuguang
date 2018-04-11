<template>
  <div class="yan">
        <img src="../../assets/pic/self.png" alt="">
        <x-button style="margin-top:30%; color:#FF4141;" @click.native="nextPage">退出登陆</x-button>
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
        .weui-btn_default{
            backgroud-color:#fff;
        }
    }
</style>