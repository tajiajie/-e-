<template>
  <div class="container login">
    <div class="top">
      <MyHeader><router-link to="/Home" class="iconfont icon-fanhui"></router-link>登录</MyHeader>
    </div>
    <div class="wrap">
      <div class="login-wrap">
        <img src="../assets/xiazai.png" alt="">
      </div>
      <form class="form">
        <div class="login-form">
        <input type="text" name="id_card" id="idcard" placeholder="身份证号" value="" v-model="user.idNum">
        </div>
        <div class="login-form">
        <input type="password" name="password" id="password" placeholder="密码" value="" v-model="user.pwd">
        </div>
        <div class="login-form">
        <input type="button" name id="login" value="登录" @click="upon">
         </div>
      </form>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue';
  export default {
    name: "Login",
    components:{
      MyHeader
    },
    data (){
      return{
        user:{idNum:'',pwd:''}
      }
    },
    methods: {
      upon(){
        this.$axios.post("userLogin", this.user).then(res => {
          console.log(res.ret)
          if (res.ret==true) {
            this.$router.push({path: '/My'})
          }
          else {
            alert("账号或密码不正确")
          }
        })
        // console.log(res.data)
        // this.arr=res.data;
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
  .wrap{
    position: fixed;
    left:0;
    bottom: 0;
    right: 0;
    top: 0;
    background: #C50206;
  }
  .login-wrap{
    margin: 44px auto 0;
  }
  .login-wrap img{
    background: #C50206;
    padding: 30px 86px;
    width: 203px;
    height: 48px;
  }
  .login-form{
    width: 300px;
    margin: 0 auto;
  }
  ::-webkit-input-placeholder{
    color: #fff;
    padding: 0 5px;
  }
  .login-form input{
    border: 1px solid #ff0;
    background: #C50206;
    margin-bottom: 10px;
    border-radius: 5px;
    color: #fff;
    height: 40px;
    width: 287px;
    padding: 0 5px;
  }
  .login-form #login{
    background: #e3574f;
    border-width: 0;
    width: 100%;
    margin-bottom: 10px;
    border-radius: 5px;
    color: #fff;
    height: 42px;
  }
</style>

