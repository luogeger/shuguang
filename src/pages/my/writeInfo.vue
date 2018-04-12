<template>
    <div class="write-info">
        <group :gutter='0'>
            <x-textarea 
                placeholder="请填写个人简介内容" 
                v-model="content" 
                :height='200' 
                show-counter 
                :max='100'>
            </x-textarea>
        </group>
        <box gap='20px 0'>
            <x-button type='primary'>保存</x-button>
        </box>
    </div>
</template>
<script>
    import { Group, XButton, Box, XTextarea } from 'vux';
    export default {
        name:'write-info',
        data(){
            return {
                content:''
            }
        },
        components:{
            Group,
            XButton,
            XTextarea,
            Box
        }
    }
</script>
<style lang="less" scoped>

</style>

