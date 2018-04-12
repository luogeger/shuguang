<template>
    <div>
        <div :class="[{'vux-1px-b':!normal},'unit']" v-for='(item,index) in arr' :key='index'>
            <div class="doc-info">
                <div class='doc-img'>
                    <img :src="imgUrl" alt="头像">
                </div>
                <div class="doc-self">
                    <div class="doc-name">
                        <slot></slot>
                    </div>
                    <div class="medical-time">
                        <x-button mini v-if='normal' @click.native='handleClick'>{{ btnWorld }}</x-button>
                        <x-button mini :plain='!btnType' type='primary' @click.native='handleClick' v-else>{{ btnWorld }}</x-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { XButton } from 'vux'; 
    export default {
        data(){
            return {
                arr:[1]
            }
        },
        props:{
            imgUrl:{
                type:String,
                required:false
            },
            btnWorld:{
                type:String,
                required:false
            },
            btnType:Boolean,
            normal:Boolean
        },
        methods:{
            handleClick(){
                this.$emit('sendInfo');
            }
        },
        components:{
            XButton
        }
    }
</script>
<style lang="less" scoped>
    @import '~vux/src/styles/1px.less';

    .unit{
        background-color: #fff;
    }
    .doc-info{
        display: flex;
        padding:1rem .5rem;
        .doc-img{
            flex:0 4rem;
            padding-top:.5rem;
            img {
                width: 100%;
                border-radius:1rem;
            }
        }
    }

    .doc-self{
        display: flex;
        padding-left:1rem; 
        flex:1;
        .doc-name{
            flex: 1;
        }
        .medical-time{
            padding:.6rem 0;
        }
    }
</style>

