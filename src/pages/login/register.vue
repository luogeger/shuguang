<template>
  <div class="register">
        <reset-pwd :placeholder='tips' register :btnInfo='btnInfo' @nextPage='nextPage'>
            <select-icon @getType='getType' :infoCard='infoCard'></select-icon>
            <div class="vux-1px-b social-card">
                <!-- <x-input :placeholder="isCard?'请输入社保卡号':'请输入医保卡号'"></x-input> -->
                <x-input :placeholder="'请输入'+ isCard +'号'"></x-input>
            </div>
        </reset-pwd>
  </div>
</template>
<script>
    import { Flexbox, FlexboxItem, XInput } from 'vux';
    export default {
        components: {
            Flexbox,
            FlexboxItem,
            XInput
        },
        data(){
            return {
                isCard:'医保卡',
                tips:['请设置登录密码','请重复登录密码'],
                btnInfo:'登记信息',
                infoCard:{
                    medicalCard:'医保卡',
                    socialCard:'社保卡'
                }
            }
        },
        methods:{
            nextPage(){
                this.$router.push('/my');
            },
            getType(val){
                this.isCard = val; 
                // this.isCard = val === this.infoCard.socialCard;
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../assets/style/public.less';
    @import '~vux/src/styles/1px.less';

    .register {
        .inputStyle;
        .social-card {
            font-size:1.6rem;
        }
    }
</style>
