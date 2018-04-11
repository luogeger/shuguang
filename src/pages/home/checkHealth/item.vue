<template>
    <div>
        <router-link class="item" to='/checkoutDetail' v-for="(item,index) in checkList" :key='index'>
            <div class="item-left">
                <p>{{item.name}}</p>
                <p>{{item.place}}</p>
            </div>
            <div class="item-right">
                <p>{{item.time}}</p>
                <p>{{item.skill}}</p>
            </div>
        </router-link>
    </div>
</template>
<script>
    export default {
       props:{
           checkList:{
               type:Array,
               required:true
           }
       } 
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
