<template>
    <div class="record">
        <tab custom-bar-width='30px' active-color='#000' bar-active-color='#FFA600'>
            <tab-item @on-item-click="handler" selected >全部记录</tab-item>
            <tab-item @on-item-click="handler">已评价</tab-item>
            <tab-item @on-item-click="handler">未评价</tab-item>
            <tab-item @on-item-click="handler">问诊中</tab-item>
        </tab>
        <item></item>
    </div>
</template>
<script>
    import { Tab, TabItem } from 'vux'
    import item from './item'
    export default {
        components: {
            Tab,
            TabItem,
            item
        },
        methods:{
            handler(){

            }
        }
    }
</script>
<style lang="less" scoped>
    

</style>