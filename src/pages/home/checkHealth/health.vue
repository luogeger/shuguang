<template>
    <div class="health">
        <card>
            <div slot="content" class="card-demo-flex card-demo-content01">
                <router-link class="vux-1px-r" to='/'>
                    <img src="../../../assets/imgs/mzjl.png" alt="icon">
                    <span>门诊记录</span>
                </router-link>
                <router-link class="vux-1px-r" to='/'>
                    <img src="../../../assets/imgs/zyjl.png" alt="icon">
                    <span>住院记录</span>
                </router-link>
            </div>
        </card>
        <group :gutter='10' title=" ">
            <cell :title="item.name" :inline-desc='item.desc' is-link :link='item.link' v-for='(item,index) in list' :key='index'>
                <img slot="icon" width="35" style="display:block;margin-right:10px;" :src='item.src'>
            </cell>
        </group>
    </div>
</template>

<script>
    import { Card, Group, Cell } from 'vux';
    export default {
        data(){
            return {
                list:[{
                    name:'检验报告',
                    desc:'血常规、尿常规、细菌培养等',
                    link:'/checkReport',
                    src:require('../../../assets/imgs/jybg.png')
                },{
                    name:'检查报告',
                    desc:'医学影像检查、包括拍片、超声等',
                    link:'/checkout',
                    src:require('../../../assets/imgs/jcbg.png')
                },{
                    name:'用药清单',
                    desc:'医院开据药品明细',
                    link:'/drugList',
                    src:require('../../../assets/imgs/yyqd.png')
                },]
            }
        },
        components:{
            Card,
            Group,
            Cell
        },
        methods:{

        }
    }
</script>
<style lang="less" scoped>
    @import '~vux/src/styles/1px.less';
    @import '../../../assets/style/public.less';


    .card-demo-flex {
        display: flex;
        a {
            flex: 1;
            text-align: center;
            .fontStyle(1.6rem, #333, .8);
            img {
                width: 20%;
            }
            span {
                display: inline-block;
                vertical-align: super;
            }
        }
    }
    .card-demo-content01 {
        padding: 30px 0;
    }
</style>

