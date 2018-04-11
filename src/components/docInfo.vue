<template>
  <div class="doc-info">
    <div class="doc-img">
        <img src="../assets/imgs/hz_zxys.png" alt="医师头像">
    </div>
    <div class="doc-referral">
        <div class="doc-referral-info">
            <div class="doc-technical">
                <div class="technical-name">
                    <span>王小花</span>
                    副主任医师&nbsp;教授
                </div>
                <div class="technical-hosp">
                    上海曙光医院 骨与软组织
                </div>
                <div class="rate">
                    <rater v-model="data7" :min="3" :font-size="15"></rater>
                    <span>咨询量 2599</span>
                </div>
            </div>
            <div class="doc-pay">
                <x-button mini type="primary">免费问</x-button>
            </div>
        </div>
        <div class="goodAt">
            擅长：骨肉瘤、骨巨细胞瘤胞瘤...
        </div>
    </div>
  </div>
</template>
<script>
    import { Rater, XButton } from 'vux'
    export default {
        components:{
            Rater,
            XButton
        },
        data(){
            return {
                data7:1
            }
        }
    }
</script>
<style lang="less" scoped>
    .pattern {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .doc-info{
        display: flex;
        background-color: #fff;
    }
    .doc-img{
        flex:0 20%;
        width:100%;
        padding:10px;
        img {
            width:100%;
            height:70%;
        }
    }
    .doc-referral{
        flex:0 80%;
        width:100%;
        .goodAt{
            // .pattern;
        }
    }

    .doc-referral-info{
        display: flex;
    }
    .doc-pay{
        flex:0 80px;
        text-align: center;
        margin-top:10px;
    }
    .doc-technical{
        flex:1;
    }
    .technical-name{
        font-size:14px;
        // text-overflow: ellipsis;
        // white-space: nowrap;
        // overflow: hidden;
    }
</style>


