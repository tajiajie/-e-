<template>
  <div>
    <div class="top">
      <MyHeader><router-link to="/My" class="iconfont icon-fanhui"></router-link>个人量化积分</MyHeader>
    </div>
    <!---->
    <div class="jifen1">
      <div class="jifentu">
        <!--<img src="../assets/jifen.png" alt="">-->
        <span class="xiaoshuzi">5.6</span>
      </div>
      <!--积分明细-->
      <div class="mingxi">
        <router-link to="/jifenmingxi" class="mingxiitem">
          <img src="../assets/lxjf.png" style="padding: 10px 0px">
          <span class="mingxiper">积分明细</span>
          <i class="iconfont icon-gengduojiantou" style="padding: 20px 0px"></i>
        </router-link>
      </div>
      <!--积分规则-->
      <div class="guize">
        <span>积分规则</span>
        <img src="../assets/wenhao.png" alt="">
      </div>
      <!--明细-->
      <div class="jifenlist">
        <!--1-->
        <div class="jifenlist-item">
          <span class="itemicon">登录APP</span>
          <span class="fenshu">5</span>
        </div>
        <!--2-->
        <div class="jifenlist-item">
          <span class="itemicon">完善个人信息</span>
          <span class="fenshu">2</span>
        </div>
        <!--3-->
        <div class="jifenlist-item">
          <span class="itemicon">查看积分</span>
          <span class="fenshu">1</span>
        </div>
        <!--4-->
        <div class="jifenlist-item">
          <span class="itemicon">按时交纳党费</span>
          <span class="fenshu">10</span>
        </div>
        <!--5-->
        <div class="jifenlist-item">
          <span class="itemicon">查看通知</span>
          <span class="fenshu">2</span>
        </div>
        <!--6-->
        <div class="jifenlist-item">
          <span class="itemicon">了解学院工作动态</span>
          <span class="fenshu">5</span>
        </div>
        <!--7-->
        <div class="jifenlist-item">
          <span class="itemicon">上交思想汇报经审核通过</span>
          <span class="fenshu">5</span>
        </div>
        <!--8-->
        <div class="jifenlist-item">
          <span class="itemicon">主动学习相关文件</span>
          <span class="fenshu">10</span>
        </div>
        <!--9-->
        <div class="jifenlist-item">
          <span class="itemicon">认真撰写心得总结并上交，经审核通过</span>
          <span class="fenshu">5</span>
        </div>
        <!--10-->
        <div class="jifenlist-item">
          <span class="itemicon">提交个人总结，并参与评议</span>
          <span class="fenshu">2</span>
        </div>
        <!--11-->
        <div class="jifenlist-item">
          <span class="itemicon">积极参与互动</span>
          <span class="fenshu">5</span>
        </div>
        <!--12-->
        <div class="jifenlist-item">
          <span class="itemicon">学习党建知识</span>
          <span class="fenshu">5</span>
        </div>
        <!--13-->
        <div class="jifenlist-item">
          <span class="itemicon">学习党史</span>
          <span class="fenshu">10</span>
        </div>
        <!--14-->
        <div class="jifenlist-item">
          <span class="itemicon">创先争优事迹</span>
          <span class="fenshu">10</span>
        </div>
        <!--15-->
        <div class="jifenlist-item">
          <span class="itemicon">学党章，学习近平总书记系列讲话</span>
          <span class="fenshu">10</span>
        </div>
        <!--16-->
        <div class="jifenlist-item">
          <span class="itemicon">用镜头记录两学一做过程中令人感动的人和事</span>
          <span class="fenshu">3</span>
        </div>
        <!--17-->
        <div class="jifenlist-item">
          <span class="itemicon">关注并积极参与特色活动</span>
          <span class="fenshu">5</span>
        </div>
        <!--18-->
        <div class="jifenlist-item">
          <span class="itemicon">制度化、常态化建设</span>
          <span class="fenshu">5</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue';
  export default {
    name: "jifen",
    components:{
      MyHeader
    },
    mounted(){
      this.$axios.get("panDuan").then(res=> {
        if (res.ret==false){
          this.$router.push({path: '/Login'})
        }
      })
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
  .jifen1{
    margin-top: 44px;
  }

  .jifentu{
    background: url("../assets/jifen.png")no-repeat;
    width: 100%;
    height: 145px;
    background-size:100% 100%
  }
  .jifentu img{
    height: 145px;
    width: 100%;
    margin-top: -1px;
  }
.jifentu .xiaoshuzi{
  font-size: 14px;
  color: #f9f9f9;
  display: block;
  width: 100%;
  height: 20px;
  text-align: center;
  padding-top: 65px;
}

  .mingxi img{
    padding: 10px;
    left: 11px;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    height: 32px;
    width: 32px;
  }
  .mingxiitem{
    padding: 15px 54px;
    margin-top: 2px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    position: relative;
    display: block;
    font-size: 16px;
  }
  .iconfont{
    left: auto;
    right: 10px;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    font-size: 15px;
  }
  .guize{
    height: 34px;
    background: rgb(238, 238, 238);
  }
  .guize span{
    display: block;
    line-height: 34px;
    padding-left: 11px;
    float: left;
  }
  .guize img{
    float: right;
    padding: 7px 11px;
  }

  .jifenlist-item{
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    position: relative;
    display: block;
    margin: -1px;
    padding: 6px 11px;
    font-size: 16px;
  }
  .itemicon{
    font-size: 14px;
    color: rgb(153,153,153);
  }
  .fenshu{
    display: block;
    font-size: 14px;
    color: #f00;
    float: right;
    line-height: 20px;
  }
</style>
