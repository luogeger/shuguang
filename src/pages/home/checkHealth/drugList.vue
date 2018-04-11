<template>
    <div class="drug-list">
        <group :gutter='10' style="border-radius:10px;">
            <cell title="上海曙光医院" value="2018-03-20" style="background-color:#FFA600;color:#fff;"></cell>
            <cell-form-preview :list="list"></cell-form-preview>
        </group>
    </div>
</template>
<script>
    import { CellFormPreview, Group, Cell } from 'vux'
    export default {
        name:'drug-list',
        data(){
            return {
                list:[{
                    label:'感冒灵颗粒',
                    value:'12袋 x 2盒'
                },{
                    label:'感冒灵颗粒',
                    value:'12袋 x 2盒'
                },{
                    label:'感冒灵颗粒',
                    value:'12袋 x 2盒'
                }]
            }
        },
        methods:{

        },
        components: {
            CellFormPreview,
            Group,
            Cell
        }
    }
</script>
<style lang="less" scoped>
    .drug-list{
        margin:0 1rem;
    }
</style>