<template>
  <div class="yan">
        <!-- <img src="../../assets/pic/doc-info.png" alt=""> -->
        <x-button type="primary" @click.native="nextPage">免费问诊</x-button>
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
           this.$router.push('/chat') 
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