<template>
  <div>
    <div class="top">
      <MyHeader><router-link to="/My" class="iconfont icon-fanhui"></router-link>个人信息
        <router-link to="/personal2" class="bianji">编辑</router-link>
      </MyHeader>
    </div>
    <div class="peritems">
      <div class="peritem">
        <span class="perit">头像</span>
        <img :src="item.img" alt="">
      </div>
      <div class="peritem">
        <span class="perit">姓名</span>
        <p class="tianzi" v-text="item.name"></p>
      </div>
      <div class="peritem">
        <span class="perit">身份证</span>
        <p class="tianzi" v-text="item.idNum"></p>
      </div>
      <div class="peritem">
        <span class="perit">家庭住址</span>
        <p class="tianzi">上海普陀区</p>
      </div>
      <div class="peritem">
        <span class="perit">工作地址</span>
        <p class="tianzi">上上谦</p>
      </div>
      <div class="peritem">
        <span class="perit">民族</span>
        <p class="tianzi">汉</p>
      </div>
      <div class="peritem">
        <span class="perit">微信号</span>
        <p class="tianzi">8888888</p>
      </div>
      <div class="peritem">
        <span class="perit">qq号</span>
        <p class="tianzi">9999999</p>
      </div>
      <div class="peritem">
        <span class="perit">性别</span>
        <p class="tianzi">{{sex}}</p>
      </div>
      <div class="peritem">
        <span class="perit">最高学历</span>
        <p class="tianzi">本科</p>
      </div>
      <div class="peritem">
        <span class="perit">职称</span>
        <p class="tianzi"></p>
      </div>
      <div class="peritem">
        <span class="perit">薪资水平</span>
        <p class="tianzi">100万/月</p>
      </div>
      <div class="peritem">
        <span class="perit">入党时间</span>
        <p class="tianzi" v-text=""></p>
      </div>
      <div class="peritem">
        <span class="perit">党费最后缴纳时间</span>
        <p class="tianzi" v-text=""></p>
      </div>
      <div class="peritem">
        <span class="perit">当前身份</span>
        <p class="tianzi" v-text=""></p>
      </div>
    </div>
  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue';
  export default {
    name: "personal",
    components:{
      MyHeader
    },
    data(){
      return{
        item:{},
        sex:''
      }
    },
    mounted(){
      this.$axios.get("getUsers").then(res=>{
        console.log(res.data[0])
        this.item=res.data[0];
        if(res.data[0].sex == 2){
          this.sex = '女'
        }
        else {
          this.sex = '男'
        }
      }),
        this.$axios.get("panDuan").then(res=> {
          if (res.ret==false){
            this.$router.push({path: '/Login'})
          }
        })
    },
  }
</script>

<style scoped>
  .top .iconfont{
    position: absolute;
    left: 10px;
    color: #fff;
    float: left;
  }
  .bianji{
    position: absolute;
    right: 10px;
    color: #f0f0f0;
    float: right;
    /*padding-right: 8px;*/
    /*color: #F0F0F0;*/
    /*float: right;*/
  }
  .peritems{
    margin-top: 44px;
  }
  .peritem{
    height: 48px;
    border-bottom: 1px solid #ddd;
    position: relative;
  }
  .perit{
    display: block;
    font-size: 14px;
    color: #444;
    padding-left: 11px;
    line-height: 48px;
    position: absolute;
  }

  .peritem img{
    float: right;
    width: 40px;
    height: 40px;
    margin: 4px 10px;
  }
  .tianzi{
    position: absolute;
    right: 10px;
    line-height: 48px;
  }
</style>
