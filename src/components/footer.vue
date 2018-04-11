<template>
  <div class="footer">
    <tabbar>
        <tabbar-item :selected='isSelected' @on-item-click='homePage()'>
            <img slot="icon-active" src="../assets/imgs/sy_1.png">
            <img slot="icon" src="../assets/imgs/sy_2.png">
            <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item :selected='!isSelected' @on-item-click='selfInfo()'>
            <img slot="icon" src="../assets/imgs/wd_2.png">
            <img slot="icon-active" src="../assets/imgs/wd_1.png">
            <span slot="label">我的</span>
        </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
    import { Grid, GridItem, Tabbar, TabbarItem } from 'vux'
    export default {
        components: {
            Grid,
            GridItem,
            Tabbar,
            TabbarItem
        },
        data(){
            return {
                isSelected:true
            }
        },
        created(){
            this.isSelected = !(this.$route.fullPath === '/my');
        },
        methods:{
            homePage(){
                this.$emit('home-page')
            },
            selfInfo(){
                this.$emit('self-info')
            }
        }
    }
</script>
<style lang="less" scoped>

</style>
