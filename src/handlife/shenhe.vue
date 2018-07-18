<template>
  <div>
    <div class="top">
      <MyHeader><router-link to="/Zuzhilife" class="iconfont icon-fanhui"></router-link>思想汇报</MyHeader>
    </div>

    <div class="shenhe">
      <div class="shenhetu">
        <img src="../assets/reviewing.png">
      </div>
      <div class="statetext">正在审核中</div>
      <div class="closeBtn">
        <router-link to="/Zuzhilife">关闭</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue';
  export default {
    name: "shenhe",
    components:{
      MyHeader
    },
    data(){
      return{
        user:{}
      }
    },
    methods:{
      get(){
        this.$axios.post("huiBao",this.user).then(res=>{
          this.user=res.data;
          // if (res.ret==true) {
          //   this.$router.push({path: '/Login'})
          // }
        })
      }
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

  .shenhe{
    margin-top: 44px;
  }
  .shenhetu{
    text-align: center;
  }
  .shenhetu img{
    width: 92px;
    height: 92px;
    margin-top: 50px;
  }
  .statetext{
    font-size: 14px;
    color: #666;
    text-align: center;
    margin-top: 7px;
  }
  .closeBtn{
    width: 60%;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
    background: #c50206;
    margin-top: 100px;
    border-radius: 10px;
    text-align: center;
    font-size: 16px;
  }
  .closeBtn a{
    color: #fff;
  }
</style>
