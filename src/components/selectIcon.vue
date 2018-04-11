<template>
  <div class="select-icon">
    <flexbox> 
      <flexbox-item>
        <div class="flex-demo">
          <input type="radio" :value="infoCard.medicalCard" v-model="medicalValue" name='item' id='item1'>
          <label for="item1"></label>
          <span>{{infoCard.medicalCard}}</span>
        </div>
      </flexbox-item>
      <flexbox-item>
        <div class="flex-demo">
          <input type="radio" :value="infoCard.socialCard" v-model="medicalValue" name='item' id='item2'>
          <label for="item2"></label>
          <span>{{infoCard.socialCard}}</span>
        </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>
<script>
  import { Flexbox, FlexboxItem } from 'vux';
  export default {
    components: {
      Flexbox,
      FlexboxItem
    },
    data(){
      return {
        medicalValue:this.infoCard.medicalCard
      }
    },
    props:{
      infoCard:{
        type:Object,
        required:true
      }
    },
    watch:{
      medicalValue(val){
        this.$emit('getType',val);
      }
    }
  }
</script>
<style lang="less" scoped>
    @import '../assets/style/public.less';

    .flex-demo{
      line-height:4;
      text-align: center;
      font-size:1.6rem;
      position: relative;
      input[type='radio'] {
        .position(absolute,0,0,100%,100%);
        opacity:0;
      }
      label {
        .position(absolute,20%,40%,13px,13px);
        border-radius:50%;
        background-color: #ddd;
      }
      input:checked + label { 
        background-color: @base;
      }
    }
</style>
