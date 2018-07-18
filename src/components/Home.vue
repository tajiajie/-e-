<template>
  <div>
    <!--头-->
    <MyHeader class="loge">
      <img src="../assets/xiazai.png" alt="">
      <router-link to="/Login"
      class="load" v-show="isShow">登录</router-link>
    </MyHeader>
    <!--轮播-->
    <router-link to="/NEW4">
      <div class="LB">
        <mt-swipe :auto="8000">
          <mt-swipe-item v-for="item in arr">
            <div class="lunbo"><img :src="item.img"></div>
            <div class="zi"><p v-text="item.title"></p></div>
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </router-link>
    <!--列表-->
    <div class="list">
      <div class="shang">
        <router-link to="/neweye">
          <img src="../assets/icon_01.png" alt="">
          <span>信工新闻眼</span>
        </router-link>
        <router-link to="/Zuzhilife">
          <img src="../assets/icon_03.png" alt="">
          <span>掌上组织生活</span>
        </router-link>
        <router-link to="/yunhudong">
          <img src="../assets/icon_05.png" alt="">
          <span>党员云互动</span>
        </router-link>
      </div>
      <div class="xia">
        <router-link to="/yidiantong">
          <img src="../assets/icon_04.png" alt="">
          <span>党建一点通</span>
        </router-link>
        <router-link to="/id">
          <img src="../assets/icon_06.png" alt="">
          <span>党员亮身份</span>
        </router-link>
        <router-link to="/today">
          <img src="../assets/icon_02.png" alt="">
          <span>党史上的今天</span>
        </router-link>
      </div>
    </div>
    <!--插图-->
    <div class="chatu">
      <img src="../assets/banner02.png" alt="">
    </div>
    <!--特色党建-->
    <div class="dangjian">
      <div class="hezi1"></div>
      <div class="hezi2">
        <div class="gezi">
          <router-link to="/study"  class="gezi1"></router-link>
          <router-link to="/photograph" class="gezi1"></router-link>
        </div>
        <div class="gezi">
         <router-link to="/system" class="gezi1"></router-link>
          <router-link to="/activity" class="gezi1"></router-link>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>

  import MyHeader from '../base/MyHeader.vue';
    export default {
        name: "Home",
      components:{
        MyHeader
      },
      data(){
          return{
            arr:[],
            isShow:true,
          }
      },
      // methods:{
      //   djab(){
      //     this.isShow()
      //     // console.log(res)
      //
      //
      //     }
      //     },
      mounted(){
          this.$axios.get("getLBT").then(res=>{
            // console.log(res.data)
            this.arr=res.data;
          }),
            this.$axios.get("panDuan").then(res=> {
              console.log(res)
              // this.arr = res.data;
              if (res.ret==true){
                this.isShow = false
              }
              else {
                this.isShow = true
              }
            })
        }
    }
</script>

<style scoped>
.loge img{
 float: left;
  width: 130px;
  height: 32px;
  margin: 6px 8px;
}
.load{
  float: right;
  margin: 0 10px;
  color: #FBEEEE;
  font-size: 17px;
}
.LB{
    height: 187.5px;
    width: 100%;
    margin: 44px auto 0;
  }
.lunbo{
  position: absolute;
  width: 100%;
}
.lunbo img{
  height: 187.5px;
  width: 100%;
}
  .zi{
    position: relative;
    top:160px;
    background-color: rgba(49,49,39,0.5);
    line-height: 28px;
    color: #fff;
    font-size: 10px;
  }
.list{
  font-size: 10px;
  background: url("../assets/bt_bg.png")no-repeat;
  width: 100%;
  height: 200px;
  background-size:100% 100%
  }
.list .shang{
  width: 100%;
  height: 100px;
  display: flex;
}
.list .xia{
  width: 100%;
  height: 100px;
  display: flex;
}
a{
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.list img{
  width: 50px;
  height: 50px;
  margin: 0 0 5px;
}
.chatu img{
  width: 100%;
  height: 90px;
}
  .dangjian{
    background: url("../assets/tese.png")no-repeat;
    width: 100%;
    height: 165px;
    background-size:100% 100%;
    margin-top: -4px;
    margin-bottom: 50px;
    display:flex;
  }
.hezi1{
  flex: 1;
}
.hezi2{
  flex: 2;
  display: flex;
  flex-direction:column;
}
.gezi{
  flex: 1;
  display: flex;
}
.gezi1{
  flex: 1;
}
</style>
