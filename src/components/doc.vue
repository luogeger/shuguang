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
                        <img src="../assets/imgs/hz_jswz.png" alt="快速抢答">
                        <p style="margin-top:.4rem;">快速抢答</p>
                    </router-link>
                </flexbox-item>
                <flexbox-item>
                    <router-link class="flex-demo" to='/inquiry'>
                        <img src="../assets/imgs/ys_wdzx.png" alt="我的咨询">
                        <p>我的咨询</p>
                    </router-link>
                </flexbox-item>
                <flexbox-item>
                    <router-link class="flex-demo" to='/health'>
                        <img src="../assets/imgs/ys_kszz.png" alt="快速转诊">
                        <p>快速转诊</p>
                    </router-link>
                </flexbox-item>
                <flexbox-item>
                    <router-link class="flex-demo" to='/health'>
                        <img src="../assets/imgs/ys_kjcf.png" alt="开具处方">
                        <p>开具处方</p>
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

