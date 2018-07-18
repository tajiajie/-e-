<template>
  <div>
    <MyHeader>通知早知道</MyHeader>
    <div class="tongzhi">

      <router-link :to="'/NEW9?id='+item._id" v-for="item in arr" :key="item.id" class="row">
        <div class="laba">
          <i class="iconfont icon-xiaolaba"></i>
        </div>
        <div class="col">
          <div class="notice-title"><span v-text="item.title"></span></div>
          <div class="notice-time"><span v-text="item.updateTime"></span></div>
        </div>
      </router-link>
      <!--<router-link to="/" class="row">-->
        <!--<div class="laba">-->
          <!--<i class="iconfont icon-xiaolaba"></i>-->
        <!--</div>-->
        <!--<div class="col">-->
          <!--<div class="notice-title">关于我院党支部近期关于我院党支部近期关于我院党支部</div>-->
          <!--<div class="notice-time">2017-10-30 14:53:56</div>-->
        <!--</div>-->
      <!--</router-link>-->
      <div class="shuju">
        <span>没有数据了</span>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue';
  export default {
        name: "Found",
    components:{
      MyHeader
    },
    data(){
      return{
        arr:[]
      }
    },
    mounted(){
      this.$axios.get("getTZZZD").then(res=>{
        console.log(res.data)
        this.arr=res.data;
      })
    }
    }
</script>

<style scoped>
  .tongzhi{
    background: #fff;
    top: 44px;
    position: absolute;
    right: 0;
    left: 0;
    overflow: hidden;
  }
  .row{
    margin: 0;
    padding: 10px;
    color: #666;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    display: flex;
    width: 100%;
    outline: 0;
    height: 76px;
  }
  .laba{
    text-align: center;
    padding: 18px 0 0;
    flex: 0 0 20%;
    display: block;
    width: 100%;
  }
  .iconfont{
    font-size: 25px;
    padding: 5px;
    border-radius: 50%;
    box-sizing: border-box;
    color: #fff;
    background: #c50206;
  }
  .col .notice-title{
    flex: 1;
    display: block;
    color: #333;
    font-size: 15px;
    padding: 10px 25px 5px 0;
  }
  .col .notice-time{
    color: #666;
    font-size: 8px;
  }
 .shuju{
   color: #666;
   font-size: 14px;
   text-align: center;
   padding: 10px 0;
 }
</style>
