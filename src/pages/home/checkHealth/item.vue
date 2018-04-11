<template>
    <router-link class="item" to='/checkoutDetail'>
        <div class="item-left">
            <p>上海曙光医院</p>
            <p>血液</p>
        </div>
        <div class="item-right">
            <p>2018-02-17</p>
            <p>分子生物学检查</p>
        </div>
    </router-link>
</template>
<script>
    export default {
        
    }
</script>
<style scoped lang='less'>
    @import '~vux/src/styles/1px.less';
    @import '../../../assets/style/public.less';
    .item{
        display: flex;
        background-color: #fff;
        padding:1rem;
        .item-left{
            flex:1;
            p:nth-child(1){
                .fontStyle(1.6rem, #000, .85);
            }
            p:nth-child(2){
                .fontStyle(1.6rem, #000, .65);
            }
        }
        .item-right{
            flex:1;
            text-align: right;
            p:nth-child(1){
                .fontStyle(1.4rem, #000, .65);
            }
            p:nth-child(2){
                .fontStyle(1.6rem, #FFA600, 1);
                padding-top:.2rem;
            }
        }
    }
</style>
