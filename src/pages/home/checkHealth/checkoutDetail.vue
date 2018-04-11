<template>
    <div class="detail">
        <group :gutter='0' title=' '>
            <cell title='上海曙光医院' inline-desc='分子生物学检验：血液'></cell>
        </group>
        <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
            <!-- <thead>
                <tr>
                    <th>姓名：王晓晓</th>
                    <th>性别：男</th>
                </tr>
            </thead> -->
            <tbody>
                <tr>
                    <th>姓名：王晓晓</th>
                    <th>性别：男</th>
                </tr>
                <tr>
                    <td>年龄：23</td>
                    <td>科室：耳鼻咽喉科</td>
                </tr>
                <tr>
                    <td>病区：无</td>
                    <td>床号：无</td>
                </tr>
                <tr>
                    <td>标本名称：血液</td>
                </tr>
            </tbody>
        </x-table>
    </div>
</template>
<script>
    import { Group, Cell, XTable } from 'vux'
    export default {
        name:'checkout-detail',
        data(){
            return {

            }
        },
        components:{
            Group,
            Cell,
            XTable
        }
    }
</script>
<style lang="less">
    .detail{
        // background-color: #fff;
        // height:100vh;
        // .vux-table td:before, .vux-table th:before {
        //     border:none;
        // }
        // .vux-table td:after, .vux-table th:after {
        //     border:none;
        // }
        // .vux-table {
        //     line-height:30px;
        // }
        // .detail-table{
        //     padding-top:10px;
        // }
        // .vux-table th {
        //     text-align:left;
        // }
    }
</style>
