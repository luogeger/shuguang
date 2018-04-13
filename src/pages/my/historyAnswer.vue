<template>
    <div class="history-answer">
        <item :imgUrl='imgUrl'>
            <div class="doc-name" slot='content'>
                <p>王小华</p>
                <p>男 27岁</p>
            </div>
            <div class="medical-time" slot='content'>
                <p>2018/03/18 18:07</p>
                <p>问诊结束</p>
            </div>
            <p slot='footer' class='doc-tel-info'>疑似术后不良反应，不排除左腿骨骼病变，需要进一步 检查。待后续临床观察。不排除左腿骨骼病变，需要进 一步检查。待后续临床观察。</p>
        </item>
    </div>
</template>
<script>
    import item from './item'
    export default {
        name:'history-answer',
        data(){
            return {
                imgUrl:require('../../assets/imgs/doc.png')
            }
        },
        components:{
            item
        }
    }
</script>
<style lang="less" scoped>
    @import '../../assets/style/public.less';
    .doc-name{
        flex: 1;
        p {
            .fontStyle(1.6rem, #000, .85);
            &:nth-child(2){
                .fontStyle(1.4rem, #000, .45);
                padding-top:1rem;
            }
        }
    }
    .medical-time{
        flex: 1;
        text-align: right;
        p {
            .fontStyle(1.4rem, #FFA600, 1);
            &:nth-child(2){
                padding-top:1.2rem;
            }
        }
    }
    .doc-tel-info{
        .fontStyle(1.6rem, #000, .85);
    }
</style>

