<template>
  <div class="login">
       <group gutter='10px'>
           <x-input placeholder="请输入手机号"></x-input>
           <x-input placeholder="请输入手机号"></x-input>
       </group>
       <div class="forget-passworld">
           <router-link to='/forgotPassworld'>忘记密码</router-link>
       </div>
       <box gap="20px 0">
           <x-button type="primary" style="border-radius:99px;" @click.native="nextPage">登记信息</x-button>
       </box>
       <div class="register-info">
           <router-link to='/register'>立即注册</router-link>
       </div>
  </div>
</template>
<script>
    import { XInput, Group, XButton, Cell, CheckIcon, Flexbox, FlexboxItem, Box } from 'vux';
    export default {
        components: {
            XInput,
            XButton,
            Group,
            Cell,
            CheckIcon,
            Flexbox,
            FlexboxItem,
            Box 
        },
        methods:{
            nextPage(){
                console.info('跳转');
            }
        }
    }
</script>
<style lang="less" scoped>
    .login{
        // width:100%;
        height:100vh;
        padding:0 5%;
        background-color:#fff;
    }
</style>


