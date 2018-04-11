<template>
  <div class="register">
        <group gutter='10px'>
            <x-input placeholder="请输入手机号" ></x-input>
            <x-input placeholder="请输入验证码" class="weui-vcode">
                <x-button slot="right" type="primary" mini>发送验证码</x-button>
            </x-input>
            <x-input placeholder="请设置登录密码" ></x-input>
            <x-input placeholder="请重复登录密码" ></x-input>
            <x-input placeholder="请输入真实姓名" ></x-input>
            <x-input placeholder="请输入身份证号" ></x-input>

            <flexbox>
                <flexbox-item>
                    <div class="flex-demo">
                        <check-icon :value.sync="isSocialCard" type="plain">社保卡</check-icon>
                    </div>
                </flexbox-item>
                <flexbox-item>
                    <div class="flex-demo">
                        <check-icon :value.sync="isMedicalCard" type="plain">医保卡</check-icon>
                    </div>
                </flexbox-item>
            </flexbox>
            <x-input placeholder="请输入社保卡号" v-if='isSocialCard'></x-input>
            <x-input placeholder="请输入医保卡号" v-else></x-input>
        </group>
        <box gap="20px">
            <x-button type="primary" style="border-radius:99px;" @click.native="nextPage">登记信息</x-button>
        </box>
  </div>
</template>
<script>
import { XInput, Group, XButton, Cell, CheckIcon, Flexbox, FlexboxItem, Box } from 'vux'
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
    data(){
        return {
            isSocialCard:true,
            isMedicalCard:false
        }
    },
    methods:{
        nextPage(){
            this.$router.push('/my');
        }
    }
}
</script>
<style lang="less" scoped>

</style>
