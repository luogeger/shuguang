<template>
  <div class="record">

    <search
      @result-click="resultClick"
      @on-change="getResult"
      v-model="value"
      :auto-fixed='false'
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search"></search>
      <!-- :results="results" -->
    <flexbox :gutter="0" class='select-title'>
      <flexbox-item>
          <div class="flex-demo">
            <group :gutter='0'>
                  <cell
                    title="全部医院"
                    is-link
                    :border-intent="false"
                    :arrow-direction="showContent001 ? 'up' : 'down'"
                    @click.native="showContent001 = !showContent001"></cell>
            </group>
          </div>
      </flexbox-item>
        <flexbox-item>
          <div class="flex-demo">
            <group :gutter='0'>
                <cell
                    title="全部科室"
                    is-link
                    :border-intent="false"
                    :arrow-direction="showContent002 ? 'up' : 'down'"
                    @click.native="showContent002 = !showContent002">
                  </cell>
            </group>
        </div>
      </flexbox-item>
        <flexbox-item>
          <div class="flex-demo">
            <group :gutter='0'>
                <cell
                    title="推荐热度"
                    is-link
                    :border-intent="false"
                    :arrow-direction="showContent003 ? 'up' : 'down'"
                    @click.native="showContent003 = !showContent003">
                  </cell>
            </group>
        </div>
      </flexbox-item>

          <div class="select-info">
            <template v-if="showContent001">
              <cell-box :border-intent="false" class="sub-item">全部科室</cell-box>
              <cell-box class="sub-item">内科</cell-box>
              <cell-box class="sub-item">外科</cell-box>
              <cell-box class="sub-item">耳鼻喉科</cell-box>
              <cell-box class="sub-item">放射科</cell-box>
              <cell-box class="sub-item">骨与软组织科</cell-box>
              <cell-box class="sub-item">皮肤科</cell-box>
            </template>
            <!-- <p class="slide" :class="showContent001?'animate':''">
                全部科室<br/>
                内科<br/>
                外科<br/>
                耳鼻喉科<br/>
                放射科<br/>
                骨与软组织科<br/>
                皮肤科
          </p> -->
    </div>
    </flexbox>
    <!-- <doc-info></doc-info> -->
    <div class="content">
        <img src="../../assets/pic/doclist2.png" alt="" @click="nextPage1">
        <img src="../../assets/pic/doclist1.png" alt="" @click="nextPage2">
        <img src="../../assets/pic/doclist2.png" alt="" @click="nextPage3">
        <img src="../../assets/pic/doclist1.png" alt="" @click="nextPage4">
        <div :class="showContent001?'shadow':''"></div>
    </div>

  </div>
</template>
<script>
  import { Search, Group, Cell, Flexbox, FlexboxItem, Panel, XButton, CellBox } from 'vux';
  import docInfo from '../../components/docInfo'
  export default {
      components: {
        Search,
        Group,
        Cell,
        FlexboxItem,
        Flexbox,
        Panel,
        docInfo,
        XButton,
        CellBox
      },
      methods: {
          setFocus () {
            // this.$refs.search.setFocus()
          },
          resultClick (item) {
            // window.alert('you click the result item: ' + JSON.stringify(item))
          },
          getResult (val) {
            console.log('on-change', val)
            this.results = val ? getResult(this.value) : []
          },
          onSubmit () {
            this.$refs.search.setBlur()
            // this.$vux.toast.show({
            //   type: 'text',
            //   position: 'top',
            //   text: 'on submit'
            // })
          },
          onFocus () {
            console.log('on focus')
          },
          onCancel () {
            console.log('on cancel')
          },
          onImgError (item, $event) {
            console.log(item, $event)
          },
          nextPage1(){
            this.$router.push('/doc');
          },
          nextPage2(){
            
          },
          nextPage3(){
            this.$router.push('/doc');
          },
          nextPage4(){

          }
        },
      data () {
        return {
          results: [],
          value: '',
          showContent001:false,
          showContent002:false,
          showContent003:false,
        }
      }
}

function getResult (val) {
  let rs = []
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
  }
</script>
<style lang="less" scoped>
  .record {
    width:100%;
    img {
      width:100%;
    }
  }

  .content{
      width:100%;
      height: 100%;
      position: relative;
      .shadow{
        background-color: #000;
        opacity:.7;
        position: absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
      }
  }



    .select-title {
      position: relative;
    }
    .select-info{
      position: absolute;
      background-color: #fff;
      z-index:99;
      left:0;
      top:44px;
      width:100%;
    }
    .slide {
        padding: 0 20px;
        overflow: hidden;
        max-height: 0;
        transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
      }
    .animate {
      max-height: 9999px;
      transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
      transition-delay: 0s;
    }
</style>