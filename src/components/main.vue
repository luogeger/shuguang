<style lang="less" scoped>
    @import '~vux/src/styles/1px.less';

    .main {
        background-color: #fff;
        .content{
            margin:0 1rem;
        }
    }
    .nav-menu {
        padding:15px 0;
        background-color: #fff;
        font-size:1.5rem;
        .flex-demo {
            text-align: center;
            color: #000;
            display: block;
            img {
                width:25%;
            }
    }
    }

</style>
<template>
    <div class="main">
        <div class="content">
            <flexbox :gutter='0' class="nav-menu">
                <flexbox-item>
                    <router-link class="flex-demo" to='/quickIssue'>
                        <img src="../assets/imgs/hz_jswz.png" alt="急速问诊">
                        <p style="margin-top:.4rem;">急速问诊</p>
                    </router-link>
                </flexbox-item>
                <flexbox-item>
                    <router-link class="flex-demo" to='/inquiry'>
                        <img src="../assets/imgs/hz_zxys.png" alt="在线医生">
                        <p>在线医生</p>
                    </router-link>
                </flexbox-item>
            </flexbox>
            <flexbox :gutter='0' class="nav-menu vux-1px-t">
                <flexbox-item>
                    <router-link class="flex-demo" to='/health'>
                        <img src="../assets/imgs/hz_jkdy.png" alt="健康调阅">
                        <p>健康调阅</p>
                    </router-link>
                </flexbox-item>
                <flexbox-item>
                    <router-link class="flex-demo" to='/'>
                        <img src="../assets/imgs/hz_zxyy.png" alt="健康调阅">
                        <p>在线预约</p>
                    </router-link>
                </flexbox-item>
            </flexbox>  
        </div>
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

