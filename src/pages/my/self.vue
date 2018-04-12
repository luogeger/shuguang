<template>
    <div>
        <group :gutter='0'>
            <cell title="头像" is-link>
                <img :src="headImg" alt="头像" class="head-img">
            </cell>
            <cell title="姓名" value="王阳阳"></cell>
            <div class="vux-1px-t" v-if='false'>
                <cell title="手机号码" value="13982910394"></cell>
                <cell title="身份证号" value="310102199302138473"></cell>
                <cell title="社保卡号" value="371928374893018734"></cell>
                <cell title="生日" value="1993-02-13"></cell>
                <cell title="性别" value="男"></cell>
            </div>
            <div class="vux-1px-t">
                <cell title="执业场所" value="上海曙光医院"></cell>
                <cell title="科室" value="骨科"></cell>
                <cell title="擅长" value="骨肉瘤、骨巨细胞瘤、软骨…" is-link></cell>
                <cell title="简介" value="骨科副主任医师，在上海曙…" is-link></cell>
                <cell title="在线时间" value="10:00-16:00" is-link></cell>
            </div>
        </group>
        <box gap='5rem 0'>
            <x-button type='default' @click.native='logOut' class='btn-word'> 退出账号</x-button>
        </box>
    </div>  
</template>
<script>
    import { Cell, Group, XButton, Box } from 'vux'
    export default {
        data(){
            return {
                headImg:require('../../assets/imgs/hz_tx.png')
            }
        },
        components: {
            Group,
            Cell,
            XButton,
            Box
        },
        methods:{
            logOut(){
                this.$router.push('/home');
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '~vux/src/styles/1px.less';

    .btn-word {
        color:#FF4141;
    }
    .head-img{
        width: 4rem;
        height: 4rem;
        border-radius:50%;
        margin-top:.7rem;
    }
</style>
