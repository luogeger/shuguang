<template>
    <div>
        <div class="head">
            <img src="../../assets/pic/my.png" alt="">
            <img src="../../assets/pic/my1.png" alt="" @click='nextPage1()'>
            <img src="../../assets/pic/my2.png" alt="" @click='nextPage2()'>
            <img src="../../assets/pic/my3.png" alt="" @click='nextPage3()'>
                <!-- <blur :blur-amount=40 :url="url">
                    <p class="head-img">
                        <img :src="url">
                    </p>
                    <p class='head-name'>张三</p>
                </blur> -->
        </div>
        <!-- <group>
            <cell title="咨询记录" is-link>
                <img slot="icon" width="20" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
            </cell>
            <cell title="我的预约" is-link>
                <img slot="icon" width="20" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
            </cell>
            <cell title="个人信息" is-link link="/self">
                <img slot="icon" width="20" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
            </cell>
        </group> -->
    </div>  
</template>
<script>
    import { Blur, Cell, Box, Group} from 'vux'
    export default {
        components: {
            Blur,
            Cell,
            Box,
            Group
        },
        data(){
            return {
                url:require('../../assets/logo.png')
            }
        },
        methods:{
            nextPage1(){
                this.$router.push('/jilu');
            },
            nextPage2(){
                this.$router.push('/yuyue');
            },
            nextPage3(){
               this.$router.push('/xinxi'); 
            }
        }
    }
</script>
<style lang="less" scoped>

    .head{
        width:100%;
        font-size:0;
        background-color: #fff;
        padding-bottom:20px;
        img{
            width:100%;
            font-size:0;
            // vertical-align:bottom;
            // line-height:0;
            // height:0;
        }
    }

    // .head{
    //     background:#FFA600;
    //     .head-name{
    //         color:#fff;
    //         text-align: center;
    //     }
    //     .head-img {
    //         text-align: center;
    //         padding-top: 20px;
    //         color: #fff;
    //         font-size: 18px;
    //         img {
    //             width: 100px;
    //             height: 100px;
    //             border-radius: 50%;
    //             border: 4px solid #ececec;
    //         }
    //     }
    // }
</style>
