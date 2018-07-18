<template>
  <div>
    <div class="top">
      <MyHeader><router-link to="/My" class="iconfont icon-fanhui"></router-link>修改密码</MyHeader>
    </div>
    <!--表单-->
    <div class="password" style="background: #fff">
      <form class="password-form">
        <div class="passwordzi">旧密码：</div>
        <input type="password" placeholder="">
        <div class="passwordzi">新密码：</div>
        <input type="password" placeholder="" v-model="user.pwd">
        <div class="passwordzi">确认密码：</div>
        <input type="password" placeholder="" >
        <button class="passwordbutton" @click="get">确定</button>
      </form>
    </div>
  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue';
  export default {
    name: "changepassword",
    components:{
      MyHeader
    },
    data(){
      return{
        user:{pwd:''}
      }
    },
    methods:{
      get(){
          this.$axios.post("xinmiMa",this.user).then(res=>{
            this.user=res.data;
            if (res.ret==true) {
              this.$router.push({path: '/Login'})
            }
          })
        }
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
  .password{
    margin-top: 44px;
  }
  .password-form{
    width: 300px;
    margin: 94px auto;
  }
  .passwordzi{
    color: #666;
    font-size: 16px;
  }
  .password-form input{
    margin: 10px 0;
    padding: 0 5px;
    width: 288px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #666;
  }
  .passwordbutton{
   color: #fff;
    background:  #ef473a;
    border: 0;
    width: 300px;
    height: 42px;
    border-radius: 5px;
    font-size: 16px;
  }
</style>
