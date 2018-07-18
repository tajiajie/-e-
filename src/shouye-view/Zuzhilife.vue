<template>
  <div>
    <div class="top">
      <MyHeader><router-link to="/Home" class="iconfont icon-fanhui"></router-link>掌上组织生活</MyHeader>
    </div>
    <!--图-->
    <div class="life">
      <div class="life-tu">
        <img src="../assets/timg.jpg" alt="">
      </div>


      <div class="lifelist">
        <div class="lifelistshang">
          <router-link to="/politicalstudy">
            <img src="../assets/icon1.png" alt="">
            <span>政治学习</span>
          </router-link>
          <router-link to="/shenhe">
            <img src="../assets/icon2.png" alt="">
            <span>思想汇报</span>
          </router-link>
          <router-link to="/success">
            <img src="../assets/icon3.png" alt="">
            <span>心得总结</span>
          </router-link>
        </div>

        <div class="lifelistxia">
          <router-link to="/democracy">
            <img src="../assets/icon4.png" alt="">
            <span>民主评议</span>
          </router-link>
          <router-link to="/mymap">
            <img src="../assets/icon5.png" alt="">
            <span class="spanzi">流动党员找组织</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue';
  export default {
    name: "Zuzhilife",
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
  .life-tu img{
    margin-top: 44px;
    height: 186.13px;
    width: 100%;
  }
  .lifelist{
    width: 100%;
    height: 310px;
  }
  .lifelist .lifelistshang{
    width: 100%;
    height: 150px;
    display: flex;
  }
  .lifelist .lifelistxia{
    height: 160px;
    display: flex;
    width: 66.66%;
    padding-top: 15px;
  }
  .lifelistshang a{
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
 .lifelistxia a{
   flex:1;
   display: flex;
   flex-direction: column;
   align-items: center;
 }
  .lifelist img{
    width: 85px;
    height: 85px;
    margin: 0 0 8px;
  }
  span{
    color: #666;
    font-size: 14px;
    width: 85px;
    text-align: center;
  }
</style>
