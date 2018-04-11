<template>
  <div class="dan">
        <flexbox :gutter='0' class="nav-menu">
            <flexbox-item>
                <router-link to='/doc' class="flex-demo" >医生主页</router-link>
            </flexbox-item>
            <flexbox-item>
                <router-link to='/chatover' class="flex-demo">结束问诊</router-link>
            </flexbox-item>
        </flexbox>
      <img src="../../assets/pic/chat.png" alt="" @click="nextPage">
  </div>
</template>
<script>
import { XButton, Flexbox, FlexboxItem } from 'vux'
export default {
    components: {
        XButton,
        Flexbox,
        FlexboxItem 
    },
    methods:{
        nextPage(){
           this.$router.push('/chat') 
        }
    }
}
</script>
<style lang="less" scoped>
    .dan{
        width:100%;
       
        background-color: #fff;
        img{
           width:100%;
        //    padding-top:10px; 
        }
        .flex-demo{
           display: block;
            text-align: center;
            padding:10px 0;
            color:#000;
            // &:nth-child(1){
            //     border-right:1px solid #000;
                
            // }
        }
    }
</style>