<template>
    <div class="my-doc">
        <router-link to='/loginDocInfo' class='add-doc'>
            <img src="../../assets/imgs/ys_gly_add.png" alt="添加">
            <span>创建新医生</span>
        </router-link>
        <util :imgUrl='imgUrl' :btnWorld='btnWorld' @sendInfo='sendInfo' normal class='info'>
            <p>王小华 <span>主任医师 教授</span></p>
            <p>上海曙光医院&nbsp;骨与软组织科</p>
        </util>
    </div>
</template>
<script>
    import util from './unit';
    export default {
        name:'my-doc',
        data(){
            return {
                imgUrl:require('../../assets/imgs/doc.png'),
                btnWorld:'删除医生',
            }
        },
        methods:{
            sendInfo(){

            }
        },
        components:{
           util 
        }
    }
</script>
<style lang="less" scoped>
    @import '../../assets/style/public.less';
    @import '../../assets/style/public.less';

    .add-doc{
        display: block;
        width: 100%;
        background-color: #fff;
        text-align: center;
        padding:.8rem 0;
        // margin-bottom:1rem;
        img {
            width:1.4rem;
            padding:0 .5rem .2rem 0;
        }
        span {
           .fontStyle(1.6rem, #FFA600, 1);
           vertical-align: super;
        }
    }
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
