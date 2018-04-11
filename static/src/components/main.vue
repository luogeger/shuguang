<style lang="less" scoped>
    .nav-menu{
        padding:15px 0;
        background-color: #fff;
    }
    .flex-demo {
        text-align: center;
        color: #000;
        background-color: #fff;
        display: block;
        img {
            width:25%;
        }
    }
</style>
<template>
  <div class="main">
    <flexbox :gutter='0' class="nav-menu">
        <flexbox-item>
            <router-link class="flex-demo" to='/wenzhen'>
                <img src="../assets/imgs/hz_jswz.png" alt="急速问诊">
                <p style="margin-top:6px;">急速问诊</p>
            </router-link>
        </flexbox-item>
        <flexbox-item>
            <router-link class="flex-demo" to='/inquiry'>
                <img src="../assets/imgs/hz_zxys.png" alt="在线医生">
                <p>在线医生</p>
            </router-link>
        </flexbox-item>
        <flexbox-item>
            <router-link class="flex-demo" to='/health'>
                <img src="../assets/imgs/hz_jkdy.png" alt="健康调阅">
                <p>健康调阅</p>
            </router-link>
        </flexbox-item>
    </flexbox>  
  </div>
</template>
<script>
    import { Flexbox, FlexboxItem } from 'vux';
    export default {
        components:{
            Flexbox,
            FlexboxItem
        }
    }
</script>

