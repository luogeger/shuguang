<template>
    <div class="quick-issue">
        <group :gutter='0'>
            <x-textarea :placeholder='tips' v-model="issueValue" :max='200' :height='300'></x-textarea>
        </group>
        <upload-img></upload-img>
        <box gap="20px 10px">
           <x-button type="primary"  @click.native="nextPage">提交问题</x-button>
        </box>
    </div>
</template>
<script>
    import { Group, XTextarea, Box, XButton } from 'vux';
    export default {
        name:'quickIssue',
        data(){
            return {
                issueValue:'',
                tips:'请详细描述您的症状、疾病、和身体状况等，至少10个字 以便于医生更准确的分析，我们会确保您的隐私安全。',
            }
        },
        components: {
            Group,
            XTextarea,
            Box,
            XButton
        },
        methods:{
            nextPage(){

            }
        }
    }
</script>
<style lang="less" scoped>
    .quick-issue{
        
    }
</style>