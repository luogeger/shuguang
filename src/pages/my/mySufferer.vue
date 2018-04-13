<template>
    <div class="my-sufferer">
        <item :imgUrl='imgUrl'>
            <div class="doc-name" slot='content'>
                <p>王小华  <span>男 27岁</span> </p>
            </div>
            <div class="medical-time" slot='content'>
                <p>委托来自：王大华</p>
            </div>
            <p slot='footer' class='doc-tel-info'>主诉：三个月前左腿骨折，已拆石膏，近期有间歇</p>
            <p slot='footer' class='doc-tel-info'>诊断：疑似术后反应，需相关检查确认。建议进行建议进行</p>
        </item>
    </div>
</template>
<script>
    import item from './item.vue'
    export default { 
        name:'my-sufferer',
        data(){
            return {
                imgUrl:require("../../assets/imgs/doc.png"),
            }
        },
        components:{
            item
        }
    }
</script>
<style lang="less" scoped>
    @import '../../assets/style/public.less';

    .head-img{
        width: 100%;
    }
    .doc-name{
        flex: 1;
        p {
            padding-top:2rem;
            .fontStyle(1.6rem, #000, .85);
            span {
                .fontStyle(1.4rem, #000, .45);
            }
        }
    }
    .medical-time{
        flex: 1;
        text-align: right;
        p {
            padding-top:2.3rem;
            .fontStyle(1.4rem, #FFA600, 1);
        }
    }
    .doc-tel-info{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        .fontStyle(1.6rem, #000, .85);
    }
</style>

