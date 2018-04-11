<template>
  <div class="pwd">
        <reset-pwd :placeholder='tips' :btnInfo='btnInfo'></reset-pwd>
  </div>
</template>
<script>
    import { XInput, Group, XButton, Box } from 'vux';
    export default {
        data(){
            return {
                tips:['请设置新密码','请重复新密码'],
                btnInfo:'重置密码'
            }
        },
        components: {
            XInput,
            XButton,
            Group,
            Box
        },
    }
</script>
<style lang="less" scoped>
    @import '../../assets/style/public.less';

    .pwd{
        .inputStyle;
    }
</style>