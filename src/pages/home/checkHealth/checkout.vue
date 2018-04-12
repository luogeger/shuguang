<template>
    <div class="checkout">
        <item :checkList='checkList'></item>
    </div>
</template>
<script>
    import item from './item'
    export default {
        name:'checkout',
        data(){
            return {
                checkList:[{
                    name:'上海曙光医院',
                    time:'2018-02-17',
                    place:'血液',
                    skill:'分子生物学检查'
                }]
            }
        },
        components:{
            item
        },
        methods:{
            
        }
    }
</script>
<style lang="less" scoped>
    .yan{
        width:100%;
        img{
           width:100%; 
        }
    }
</style>