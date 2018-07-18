<template>
  <div class="dadahe">
    <div class="top">
      <MyHeader><router-link to="/Home" class="iconfont icon-fanhui"></router-link>党员云互动</MyHeader>
    </div>

    <div class="yunyun">
    <div v-for="item in arr">
      <ul class="lxyztlqList">
        <li class="item">
          <div class="top clearfix">
            <div class="touxiang">
              <img :src="item.userAvatar">
            </div>
            <div class="top-center">
              <div class="nickname" v-text="item.userName">test6</div>
              <div class="time">
                <span class="time1">
                  <span>
                    <i class="iconfont icon-shijian"></i>
                  </span>
                  <span v-text="item.createTime"></span>
                </span>
                <span>
                <i class="iconfont icon-laba"></i>
                <span>公开</span>
                </span>
              </div>
            </div>
            <div class="lxyz">党员互动</div>
          </div>
          <div class="content" v-text="item.content">支持我党</div>
          <router-link :to="'/yunhudong1?id='+item._id" :key="item.id" class="clearfix">
            <span class="response">
              <i class="iconfont icon-xiaoxi"></i>
              <span>回复</span>
            </span>
          </router-link>
        </li>

      </ul>

    </div>

      <!---->
      <div class="fabu" @click="handleClick1">
        <i class="iconfont icon-xinzeng"></i>
      </div>

    </div>

    <mt-popup v-model="popupVisible1" modal=false class="popup" position="bottom">
      <div class="kuang">
        <form action="" class="tianjiabiao">
          <textarea v-model="formdata.content"></textarea>
          <div class="dianjizi">

            <input type="button" value="发布" class="fabule" @click="fabu">
            <input type="button" value="取消" class="quxiao" @click="quxiaole">

          </div>
        </form>
      </div>
    </mt-popup>
  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue';
  export default {
    name: "yunhudong",
    components:{
      MyHeader
    },
    data() {
      return{
      popupVisible1:false,
        formdata:{
           content:'',
        },
        arr:[]
    }
    },
    methods: {
      handleClick1() {
        this.popupVisible1 = true
      },
      quxiaole(){
        this.$router.go("/yunhudong")
      },
      fabu(){
        this.$axios.post("yunTianjia",this.formdata).then(res=> {
          // console.log(res.code)
          if(res.code == 200){
            this.$router.go("/yunhudong")
          }
        })
      },
      isLogin() {
        this.$axios.get("panDuan").then(res => {
          // console.log(res)
          if (res.ret == false) {
            this.$router.push("/Login")
          }
        })
      }
    },
    created(){
      this.isLogin()
    },
    mounted(){
      this.$axios.get("yunHuoqu").then(res => {
        console.log(res)
        this.arr=res.data;
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
.dadahe{
  background: #EFEFF4;
  width: 100%;
  height: 100%;
}
  .yunyun{
    margin-top: 44px;
    overflow: hidden;
  }
  .item{
    margin-bottom: 10px;
    overflow: hidden;
    border: 1px solid #EFEFF4;
    background-color: #fff;
    color: #444;
    position: relative;
    display: block;
    padding: 10px;
    font-size: 16px;
  }
  .touxiang{
    width: 33px;
    height: 33px;
    float: left;
    overflow: hidden;
  }
  .yunyun img{
    width: 33px;
    height: 33px;
    border-radius: 50%;
  }

  .top-center{
    margin-left: 10px;
    margin-top: 0;
    margin-bottom: 5px;
    float: left;
    overflow: hidden;
  }
  .time{
    font-size: 8px;
    display: block;
    width: 240px;
    height: 21px;
    clear: both;
    overflow: hidden;
  }
  .time .iconfont{
    font-size: 12px;
  }

  .lxyz{
    font-size: 12px;
    padding: 4px 8px;
    color: red;
    border: 1px solid red;
    border-radius: 15%/50%;
    float: right;
  }
  .content{
    padding: 10px 0;
    position: relative;
  }
  .response{
    float: right;
  }
  .response .iconfont{
    font-size: 18px;
  }

  .fabu{
    position: fixed;
    right: 10px;
    bottom: 70px;
    z-index: 99;
  }
  .fabu .iconfont{
    font-size: 56px;
    color: #f00;
  }

  .popup{
    width: 100%;
    z-index: 100;
  }
  .kuang{
    width: 100%;
    height: 162px;
  }
  .tianjiabiao{
    width: 100%;
    height: 161px;
    bottom: 0;
    background: #f1f1f1;
  }

  textarea{
    width: 92%;
    height: 96px;
    border-radius: 3px;
    padding: 5px;
    margin: 5px 8px;
    border-color: transparent;
  }
  .dianjizi{
    margin: 5px 10px;
  }
  .fabule{
    border-color: transparent;
    background-color: #ef473a;
    color: #fff;
    padding: 2px;
    width: 32px;
    height: 26px;
    font-size: 12px;
    line-height: 18px;
  }
  .quxiao{
    float: right;
    padding: 2px;
    width: 30px;
    height: 26px;
    font-size: 12px;
    line-height: 18px;
    border-color: transparent;
    background-color: #fff;
  }
</style>


