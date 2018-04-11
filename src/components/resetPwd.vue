<template>
  <div class="reset">
        <group :gutter='0'>
            <x-input placeholder="请输入手机号" ></x-input>
            <x-input placeholder="请输入验证码" >
                <p slot="right" class='send-code vux-1px-l'>发送验证码</p>
            </x-input>
            <x-input :placeholder="placeholder[0]" ></x-input>
            <x-input :placeholder="placeholder[1]" ></x-input>
            <x-input placeholder="请输入真实姓名" v-if='register'></x-input>
            <x-input placeholder="请输入身份证号" v-if='register'></x-input>
        </group>
        <slot></slot>
        <box gap="20px">
            <x-button type="primary" style="border-radius:99px;" @click.native="nextPage">{{btnInfo}}</x-button>
        </box>
  </div>
</template>
<script>
    import { XInput, Group, Box, XButton} from 'vux'; 
    export default {
        components: {
            XInput,
            Group,
            Box,
            XButton
        },
        props:{
            placeholder:{
                type:Array,
                required:true
            },
            register:Boolean,
            btnInfo: {
                type:String,
                required:true
            }
        },
        methods:{
            nextPage(){
                this.$emit('nextPage');
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../assets/style/public.less';
    @import '~vux/src/styles/1px.less';
    
    .reset {
        .send-code {
            color:@base;
            font-size:1.4rem;
            padding-left:1rem;
        }
    }
</style>

