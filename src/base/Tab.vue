<template>
    <div class="footer">
      <router-link to="/home">
        <i class="iconfont icon-dangwugongkai"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/found">
        <i class="iconfont icon-tongzhi"></i>
        <span>通知早知道</span>
      </router-link>
      <router-link to="/my">
        <i class="iconfont icon-wode2"></i>
        <span>我的党建</span>
      </router-link>
    </div>
  </template>

<script>
  export default {
     name: "Tab"
  }
</script>

<style scoped>
  .footer{
    background: #fff;
    position: fixed;
    left:0;
    bottom: 0;
    width: 100%;
    height: 50px;
    display: flex;
    font-size: 10px;
    border-top: 2px solid #fff;
  }
  .iconfont{
    font-size: 21px;
  }
    a{
      flex:1;
      display: flex;
      flex-direction: column;
      color: #999999;
      justify-content: center;
      align-items: center;
    }
    a.router-link-active{
      color: #EF473A;
      border-top: 2px solid #F05347;
    }
</style>
