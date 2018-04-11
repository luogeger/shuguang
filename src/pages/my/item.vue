<template>
    <div>
        <div class="medical-list">
            <div class="doc-info">
                <div class='doc-img'>
                    <img src="../../assets/imgs/doc.png" alt="头像">
                </div>
                <div class="doc-self">
                    <div class="doc-name">
                        <p>王小华</p>
                        <p>上海曙光医院骨科</p>
                    </div>
                    <div class="medical-time">
                        <p>2018/03/18 08:26</p>
                        <p>问诊中</p>
                    </div>
                </div>
            </div>
            <div class="chat-info vux-1px-t">
                <p>看了您的描述，可能是术后反应，建议到医院进行复查。 希望您对此次问诊感到满意。</p>
            </div>
        </div>  
    </div>
</template>
<script>
    import { Group, Cell, Card } from 'vux';

    export default {
        components: {
            Group,
            Cell,
            Card
        }    
    }
</script>
<style lang="less" scoped>
    @import '~vux/src/styles/1px.less';
    @import '../../assets/style/public.less';

    .medical-list{
        background: #fff;
        box-shadow:0 5px 5px #ddd;
        margin-top:5px;
    }
    .doc-info{
        display: flex;
        margin:0 1rem;
        padding:1rem 0;
        .doc-img{
            flex:0 5rem;
            padding-top:.2rem;
            img {
                width: 100%;
                border-radius:1rem;
            }
        }
    }

    .doc-self{
        display: flex;
        padding:0 1rem; 
        flex:1;
        .doc-name{
            flex: 1;
            p:nth-child(1){
                .fontStyle(1.6rem, #000, .85);
            }
            p:nth-child(2){
                .fontStyle(1.4rem, #000, .65);
                line-height:0;
                padding-top:2rem;
            }
        }
        .medical-time{
            flex: 1;
            text-align: right;
            p:nth-child(1){
                .fontStyle(1.4rem, #000, .45);
            }
            p:nth-child(2){
                .fontStyle(1.4rem, #FFA600, 1);
                line-height:0;
                padding-top:2rem;
            }
        }
    }
    .chat-info{
        margin:0 1rem;
        padding:1rem 0;
        p {
            .fontStyle(1.6rem, #000, .85);
        }
    }
</style>

