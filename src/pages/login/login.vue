<template>
  <div class="login">
       <group :gutter='0'>
           <x-input placeholder="请输入手机号"></x-input>
           <x-input placeholder="请输入密码"></x-input>
       </group>
       <div class="forgot-password">
           <router-link to='/forgotPassword'>忘记密码</router-link>
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
    import { XInput, Group, XButton, Box } from 'vux';
    export default {
        components: {
            XInput,
            XButton,
            Group,
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
    @import '../../assets/style/public.less';

    .login {
        .inputStyle;
        .forgot-password {
            padding:5% 0;
            text-align: right;
            a {
                color:@base;
                font-size:1.4rem;
            }
        }
        .register-info {
            text-align: center;
            a {
                color:@base;
                font-size:1.6rem;
            }
        }
    }
</style>


