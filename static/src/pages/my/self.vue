<template>
    <div>
        <group>
            <cell title="头像"></cell>
            <cell title="姓名" value="王阳阳"></cell>
            <cell title="手机号码" value="13982910394"></cell>
            <cell title="身份证号" value="310102199302138473"></cell>
            <cell title="社保卡号" value="371928374893018734"></cell>
            <cell title="生日" value="1993-02-13"></cell>
            <cell title="性别" value="男"></cell>
        </group>
        <box>
            <x-button plain @click.native='logOut'> 退出账号</x-button>
        </box>
    </div>  
</template>
<script>
    import { Cell, Group, XButton, Box } from 'vux'
    export default {
        components: {
            Group,
            Cell,
            XButton,
            Box
        },
        methods:{
            logOut(){
                this.$router.push('/home');
            }
        }
    }
</script>
<style lang="less" scoped>

</style>
