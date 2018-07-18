<template>
  <div>
    <div class="top">
      <MyHeader><router-link to="/Zuzhilife" class="iconfont icon-fanhui"></router-link>掌上组织生活</MyHeader>
    </div>

    <!---->
    <div class="democracy">
      <div class="submitwrap">
        <router-link to="/persummary" class="margintop">个人总结</router-link>
        <router-link to="/know" class="margintop">民主评议</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue';
  export default {
    name: "democracy",
    components:{
      MyHeader
    }
  }
</script>

<style scoped>
  .top a{
    position: absolute;
    left: 10px;
    color: #fff;
    float: left;
  }

  .democracy{
    margin-top: 44px;
    background: #fff;
  }
  .submitwrap{
    position: absolute;
    top: 32%;
    height: 154px;
    width: 100%;
  }
  .margintop{
    display: block;
    width: 50%;
    margin: 20px 93px;
    border-color: transparent;/*透明*/
    background-color: #ef473a;
    color: #fff;
    font-size: 16px;
    line-height: 42px;
    border-radius: 4px;
    text-align: center;
    height: 45px;
  }
</style>
