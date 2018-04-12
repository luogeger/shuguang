<template>
  <div class="trust-doc">
        <util :imgUrl='imgUrl' :btnWorld='btnWorld' @sendInfo='sendInfo' class='info' :btnType='btnType'>
            <p>王小华 <span>主任医师 教授</span></p>
            <p>上海曙光医院&nbsp;骨与软组织科</p>
            <p>!!!!! <span>咨询量 2599</span></p>
            <p>擅长：骨肉瘤、骨巨细胞瘤、软骨肉瘤.......</p>
        </util>
  </div>
</template>
<script>
    import util from './unit'
    export default {
        data(){
            return {
                imgUrl:require('../../assets/imgs/doc.png'),
                btnWorld:'参与委托',
                btnType:true,
            }
        },
        components:{
            util
        },
        methods:{
            sendInfo(){
                this.btnWorld = '取消委托';
                this.btnType = false;
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../assets/style/public.less';

    .info{
        margin-top:1rem;
        p {
            .fontStyle(1.4rem, #000, .65);
        }
        p:nth-child(1){
            .fontStyle(1.6rem, #000, .85);
            span {
                font-size:1.4rem;
            }
        }
        p:nth-child(2){
            padding-top:.3rem;
        }
    }
</style>
