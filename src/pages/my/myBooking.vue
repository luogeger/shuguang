<template> 
    <div class="my-booking">
        <div class='form-list'>
            <form-preview 
                header-label="2018-03-20 15:00 -15:15" 
                :body-items="list" 
                :footer-buttons="buttons" class='preview'>
            </form-preview>
        </div>
    </div>
</template>
<script>
    import { FormPreview } from 'vux'
    export default {
        name:'my-booking',
        data(){
            return {
                list:[{
                    label:'姓名：',
                    value:'王全有'
                },{
                    label:'性别：',
                    value:'男'
                },{
                    label:'症状：',
                    value:'感冒、发烧、头疼'
                },],
                buttons:[{
                    style: 'default',
                    text: '取消预约'
                }, {
                    style: 'primary',
                    text: '修改预约',
                    link: '/'
                }]
            }
        },
        components:{
           FormPreview 
        }
    }
</script>
<style lang="less">
    @import '../../assets/style/public.less';

    .my-booking{
        width:100%;
        .form-list{
            margin:0 3% 0 3%;
        }
    }

    .preview{
        margin-top:3%;
        border-radius:3%;
        .weui-form-preview__hd{
            background-color: #FFA600;
            .weui-form-preview__label {
                .fontStyle(1.6rem, #fff, .85);
            }
        }
        .weui-form-preview__bd {
            text-align: left;
            .fontStyle(1.6rem, #000, 1);
            .weui-form-preview__label{
                color:#2d2d2d;
            }
        }
        .weui-form-preview__ft{
            .fontStyle(1.6rem, #000, .85);
        }
    }

</style>
