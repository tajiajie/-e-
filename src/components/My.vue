<template>
  <div>
    <MyHeader>我的党建</MyHeader>
    <div class="mymymy">
      <!--头-->
      <div class="banner">
        <div class="touxiang">
          <img :src="item.img" alt="">
        </div>
        <div class="nologin">
          <router-link to="/Login" v-text="item.name">你还没有登录，请登录</router-link>
          <!---->
        </div>
      </div>
      <!--列表-->
      <div class="list">
        <router-link to="/personal" class="item">
          <img src="../assets/person.png" style="padding: 10px 0px">
          <span class="listzi">个人信息</span>
          <i class="iconfont icon-gengduojiantou" style="padding: 20px 0px"></i>
        </router-link>
        <router-link to="/jifen" class="item">
          <img src="../assets/lxjf.png" style="padding: 10px 0px">
          <span class="listzi">个人量化积分</span>
          <i class="iconfont icon-gengduojiantou" style="padding: 20px 0px"></i>
        </router-link>
        <router-link to="/changepassword" class="item">
          <img src="../assets/xgmm.png" style="padding: 10px 0px">
          <span class="listzi">修改密码</span>
          <i class="iconfont icon-gengduojiantou" style="padding: 20px 0px"></i>
        </router-link>
        <router-link to="/Money" class="item">
          <img src="../assets/icon3.png" style="padding: 10px 0px">
          <span class="listzi">党费缴纳</span>
          <i class="iconfont icon-gengduojiantou" style="padding: 20px 0px"></i>
        </router-link>
      </div>

      <router-link to="/Login" >
        <!--v-show="isShow"-->
        <input type="button" value="退出登录" class="button" @click="outout" v-show="isShow">
      </router-link>
    </div>
  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue';
  export default{
        name: "My",
  components:{
    MyHeader
  },
    data(){
      return{
        item:{},
        isShow:true
      }
    },
    mounted(){
      this.$axios.get("getUsers").then(res=>{
        console.log(res.data[0])
        this.item=res.data[0];
      }),
        this.$axios.get("panDuan").then(res=> {
          console.log(res)
          // this.arr = res.data;
          if (res.ret==true){
            this.isShow = true
          }
          else {
            this.isShow = false
          }
        })
    },
    methods:{
          outout(){
            this.$axios.post("logOut").then(res => {

            })
          }
    }
    }
</script>

<style scoped>
.mymymy{
  background: #fff;
  bottom: 53px;
  top: 44px;
  position: absolute;
  right: 0;
  left: 0;
  overflow: hidden;
  margin-top: -2px;
  padding-top: 1px;
  margin-bottom: -1px;
  width: auto;
  height: auto;
}
  .banner{
    height: 140.63px;
    text-align: center;
    background: #c50206;
  }
 .touxiang img{
   margin-top: 36.5px;
   width: 62.5px;
   height: 62.5px;
   border-radius: 50%;
   background:url("../assets/bt_bg.png")no-repeat;
   background-size:100% 100%;
 }
  .nologin{
    text-align: center;
    font-size: 10px;
    margin: 5px auto;
  }
.nologin a{
  color: #fff;
}
.list{
  height: 211px;
}
.list img{
  padding: 10px;
  left: 11px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  height: 32px;
  width: 32px;
}
.item{
  padding: 16px 54px;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  position: relative;
  display: block;
  font-size: 16px;
}
.iconfont{
  left: auto;
  right: 11px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  font-size: 15px;
}
.button{
  border-color: transparent;
  background-color: #ef473a;
  color: #fff;
  width: 320px;
  height: 45px;
  padding: 0 12px;
  margin: 40px 30px;
  border-radius: 5px;
  font-size: 16px;
}
</style>
