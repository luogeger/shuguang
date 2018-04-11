<style lang="less" scoped>

</style>

<template>
    <div>
        <router-view></router-view>
        <foot @home-page='homePage' @self-info='selfInfo'></foot>
    </div>
</template>

<script>
    import foot from '../components/footer'
    export default {
        components: {
            foot
        },
        methods:{
            homePage(e){
                this.$router.replace('/home');
            },
            selfInfo(e){
                this.$router.replace('/my');
            }
        }
    }
</script>
