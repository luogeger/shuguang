<template>
    <div class='my-info'>
        <div class='self-info'>
            <div class="head">
                <div class='head-portrait'>
                    <img :src="url">
                    <p>王二狗</p>
                </div>
            </div>
            <group :gutter='10'>
                <!-- <cell :title="item.name" is-link :link='item.link' v-for='(item,index) in list' :key='index'>
                    <img slot="icon" width="25" style="display:block;margin-right:15px;" :src="item.src">
                </cell> -->
                <cell :title="item.name" is-link :link='item.link' v-for='(item,index) in items' :key='index'>
                    <img slot="icon" width="25" style="display:block;margin-right:15px;" :src="item.src">
                </cell>
            </group>
        </div>
    </div>  
</template>
<script>
    import { Blur, Cell, Box, Group} from 'vux'
    export default {
        components: {
            Blur,
            Cell,
            Box,
            Group
        },
        data(){
            return {
                url:require('../../assets/imgs/hz_tx.png'),
                list:[{
                    name:'咨询记录',
                    link:'/record',
                    src:require('../../assets/imgs/hz_zxjl.png')
                },{
                    name:'我的预约',
                    link:'/booking',
                    src:require('../../assets/imgs/hz_wdyy.png')
                },{
                    name:'个人信息',
                    link:'/self',
                    src:require('../../assets/imgs/ys_lsjd.png')    
                }],

                items:[{
                    name:'在线状态',
                    link:'/record',
                    src:require('../../assets/imgs/hz_zxjl.png')
                },{
                    name:'设置委托医生',
                    link:'/record',
                    src:require('../../assets/imgs/ys_gly_szwtys.png')
                },{
                    name:'预约安排',
                    link:'/record',
                    src:require('../../assets/imgs/hz_wdyy.png')
                },{
                    name:'历史解答',
                    link:'/record',
                    src:require('../../assets/imgs/ys_lsjd.png')
                },{
                    name:'我的患者',
                    link:'/record',
                    src:require('../../assets/imgs/ys_wdhz.png')
                },{
                    name:'个人资料',
                    link:'/record',
                    src:require('../../assets/imgs/ys_grzl.png')
                },{
                    name:'管理下属医生',
                    link:'/record',
                    src:require('../../assets/imgs/ys_gly_glxsys.png')
                }]
            }
        },
        created(){
            this.$refresh('我的');
        },
        methods:{

        }
    }
</script>
<style lang="less">
    @import '../../assets/style/public.less';
    
    .my-info{
        overflow-y:auto;
        height:100vh;
        background-color: #fff;
        .self-info{
            height:100%;
            margin-bottom:25%;
        }
        .weui-cell:before{
            border:none;
        }
        .weui-cell:after{
            border:none;
        }
        .weui-cells:after{
            border:none;
        }
    }
    .head{
        background:#FFA600;
        height:30%;
        text-align: center;
        box-shadow:0 2px 10px 0 #DC8F00;
        .head-portrait{
            padding-top:3rem;
            width:100%;
            img {
                width: 8rem;
                height: 8rem;
                border-radius: 50%;
            }
            p {
                .fontStyle(2rem, #fff, 1);
                padding-top:1rem;
            }
        }

    }
</style>
