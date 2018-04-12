<template>
  <div class="login-doc-info">
        <group :gutter='0'>
            <cell title="头像" is-link>
                <!-- <img :src="headImg" alt="头像" class="head-img"> -->
            </cell>
            <cell title="姓名" value="王阳阳"></cell>
            <x-input title="手机号码" v-model.trim="phone" placeholder='请输入' placeholder-align="right" text-align='right'></x-input>
            <x-input title="执业场所" v-model.trim="workplace" placeholder='请输入' placeholder-align="right" text-align='right'></x-input>
            <x-input title="科室" v-model.trim="office" placeholder='请输入' placeholder-align="right" text-align='right'></x-input>
            <cell title="个人擅长" value="请输入" is-link link='/writeInfo'></cell>
            <cell title="自我简介" value="请输入" is-link></cell>
            <cell title="在线时间" value="请输入" is-link></cell>
        </group>
        <box gap='20px 0'>
            <x-button type="primary" @click.native='createID'>创建帐号</x-button>
        </box>
  </div>
</template>
<script>
    import { Cell, Group, XInput, XButton,Box } from 'vux'
    export default {
        name:'login-doc-info',
        data(){
            return {
                headImg:require('../../assets/imgs/hz_tx.png'),
                phone:'',
                workplace:'',
                office:''
            }
        },
        components:{
            Cell,
            Group,
            XInput,
            XButton,
            Box 
        },
        methods:{
            createID(){

            }
        }
    }
</script>
<style lang="less" scoped>

</style>
