<template>
  <div class="record">
        <group gutter='10px'>
           <x-input placeholder="请输入手机号" ></x-input>
           <x-input placeholder="请输入手机号" ></x-input>
        </group>
        <box gap="20px 0">
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
    }
</script>
<style lang="less" scoped>
    
</style>