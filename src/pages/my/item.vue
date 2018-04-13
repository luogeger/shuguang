<template>
    <div>
        <router-link class="medical-list" to=''>
            <div class="doc-info">
                <div class='doc-img'>
                    <img :src='imgUrl' alt="头像">
                </div>
                <div class="doc-self">
                    <slot name='content'></slot>
                </div>
            </div>
            <div class="chat-info vux-1px-t">
                <slot name='footer'></slot>
            </div>
        </router-link>  
    </div>
</template>
<script>
    import { Group, Cell, Card } from 'vux';
    export default {
        props:{
            imgUrl:{
                type:String,
                required:true
            },
        },
        components: {
            Group,
            Cell,
            Card
        }    
    }
</script>
<style lang="less" scoped>
    @import '~vux/src/styles/1px.less';

    .medical-list{
        display: block;
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
    }
    .chat-info{
        margin:0 1rem;
        padding:1rem 0;
    }
</style>

