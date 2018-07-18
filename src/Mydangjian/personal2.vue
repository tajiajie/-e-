<template>
  <div>
    <div class="top">
      <MyHeader><router-link to="/personal" class="iconfont icon-fanhui"></router-link>修改个人信息
        <button class="bianji" @click="jiao">保存</button>
      </MyHeader>
    </div>

    <div class="peritems">
      <div class="peritem">
        <span class="perit">头像</span>
        <label id="imgwrap">
          <input type="file" name="file" accept="image/jpeg,image/png" @change="up" id="file-input" >
          <img :src="img1" v-if="img1" >
          <img src="" alt="">
        </label>

      </div>
      <div class="peritem">
        <span class="perit">姓名</span>
        <input type="text" class="tianzi" v-model="user.name">
      </div>
      <div class="peritem">
        <span class="perit">身份证</span>
        <p class="tianzi" v-text="user.idNum"></p>
      </div>
      <div class="peritem">
        <span class="perit">家庭住址</span>
        <input type="text" class="tianzi" value="上海普陀区">
      </div>
      <div class="peritem">
        <span class="perit">工作地址</span>
        <input type="text" class="tianzi" value="上上谦">
      </div>
      <div class="peritem">
        <span class="perit">民族</span>
        <input type="text" class="tianzi" value="汉">
      </div>
      <div class="peritem">
        <span class="perit">微信号</span>
        <input type="text" class="tianzi" value="88888888">
      </div>
      <div class="peritem">
        <span class="perit">qq号</span>
        <input type="text" class="tianzi" value="99999999">
      </div>
      <div class="peritem">
        <span class="perit">性别</span>
        <div class="xingbie1"><input type="radio" name="sex" :value="1" v-model="user.sex">男</div>
        <div class="xingbie2"><input type="radio" name="sex" :value="2" v-model="user.sex">女</div>
      </div>
      <div class="peritem">
        <span class="perit">最高学历</span>
      </div>
      <div class="peritem">
        <span class="perit">职称</span>
      </div>
      <div class="peritem">
        <span class="perit">薪资水平</span>
      </div>
      <div class="peritem">
        <span class="perit">入党时间</span>
      </div>

      <div class="peritem">
        <span class="perit">党费最后缴纳时间</span>

      </div>
      <div class="peritem">
        <span class="perit">当前身份</span>
        <select name="" class="branchSelect">
          <option value="">积极分子</option>
          <option value="">党员</option>
          <option value="">预备党员</option>
        </select>

      </div>
    </div>
  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue';
  import axios from 'axios'
  export default {
    name: "personal2",
    components:{
      MyHeader
    },
    data(){
      return{
        item:{},
        user:{img:'',sex:'',name:''},
        token: '',
        img1:""
      }
    },
    mounted(){
      this.$axios.get("getUsers").then(res=>{
        console.log(res.data[0])
        this.user=res.data[0];
      })
    },
    methods:{
      jiao(){
        this.$axios.post("xinXi",this.user).then(res=> {
          this.user= res.data;
          this.$router.push('/personal')
        })
      },

      up($event){
        console.log($event)
        var file = $event.target.files[0];
        var form = new FormData();
        form.append("file",file);
        form.append("token",this.token);
        axios.post("https://upload-z1.qiniup.com",form,{headers: {"Content-Type": "multipart/form-data"}}).then(res => {
          console.log(res)
          this.img1 = res.data.url;
          console.log(res.data.url)
          this.user.img=this.img1
        })
      },
      getToken() {
        axios.get("http://up.yaojunrong.com/getToken").then(res => {
          this.token = res.data.data;
        })
      }
    },
    created() {
      this.getToken();
    }
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
    background: transparent;
    border: 0;
    font-size: 16px;
    height: 44px;
    outline: none;
  }
  .peritems{
    margin-top: 44px;
  }
  .peritem{
    height: 48px;
    border-bottom: 1px solid #ddd;
  }
  .perit{
    display: block;
    font-size: 14px;
    color: #444;
    padding-left: 11px;
    line-height: 48px;
    position: absolute;
  }

  .tianzi{
    position: absolute;
    right: 10px;
    line-height: 48px;
    border: 0;
    outline:none;
    text-align: right;
  }
  .xingbie1{
    position: absolute;
    right: 40px;
    line-height: 48px;
    border: 0;
    outline:none;
    text-align: right;
  }
  .xingbie2{
    position: absolute;
    right: 10px;
    line-height: 48px;
    border: 0;
    outline:none;
    text-align: right;
  }
  .branchSelect{
    border: 0;
    outline:none;
    position: absolute;
    right: 10px;
    height: 48px;
    text-align: right;
  }


  #file-input{
    display: none;
  }
  #imgwrap img{
    float: right;
    width: 40px;
    height: 40px;
    margin: 4px 10px;
  }

</style>
