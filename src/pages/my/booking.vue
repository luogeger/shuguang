<template>
    <div class="booking">
        <div class="booking-info" v-for="(item,index) in items" :key='index'>
            <p>日期： <span>2018-03-20 周二</span></p>
            <p>时间： <span>上午 09:30</span></p>
            <p>医院： <span>上海市曙光医院</span></p>
            <p>科室： <span>中医科</span></p>
            <p>医生： <span>王小二 主任医师／副教授</span></p>
            <p>擅长： <span>骨肉瘤、骨巨细胞瘤、软骨肉瘤疾病，以及 骨科其他常见疾病。</span></p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            items:[1,2]
        }
    },
    methods:{

    }
}
</script>
<style lang="less" scoped>
    @import '../../assets/style/public.less';

    .booking-info{
        background-color: #fff;
        margin:1rem;
        padding:1rem;
        box-shadow:2px 4px 5px #bebcbc;
        border-radius:5px;
        p {
            .fontStyle(1.6rem, #000, 1);
            font-weight:600;
            span {
                .fontStyle(1.6rem, #000, .65);
                font-weight:400;
            }
        }
    }
</style>