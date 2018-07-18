<template>
  <div>
    <div class="top">
      <MyHeader><router-link to="/shenhe" class="iconfont icon-fanhui"></router-link>心得总结</MyHeader>
    </div>

    <!--利用ajax上传-->
    <div class="sum">
      <div class="sum">
        <label id="imgwrap">
          <input type="file" name="file" accept="image/jpeg,image/png" @change="up" id="file-input" >
          <img :src="zu.img" v-if="zu.img">
          <img src="../assets/upload.png" alt="">
        </label>
      </div>

      <div class="sum-shenhe">
        <button class="sum-zi" @click="chuantu">提交审核</button>
      </div>
    </div>
  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue';
  import axios from 'axios'
  export default {
    name: "tijiao",
    components:{
      MyHeader
    },
    data() {
      return{
        token: '',
        item:{},
        userId:'',
        zu:{
          img:"",MZPYId:{},
        }
      }
    },
    methods: {
      up($event){
        console.log($event)
        var file = $event.target.files[0];
        var form = new FormData();
        form.append("file",file);
        form.append("token",this.token);
        axios.post("https://upload-z1.qiniup.com",form,{headers: {"Content-Type": "multipart/form-data"}}).then(res => {
          console.log(res)
          this.img = res.data.url;
        })

      },
      getToken() {
        axios.get("http://up.yaojunrong.com/getToken").then(res => {
          this.token = res.data.data;
        })
      },
      chuantu(){
        this.$axios.post("grZj",this.zu).then(res=>{
          console.log(res)
          console.log(this.img)
        })
      }
    },
    mounted(){
      this.$axios.get("getMZPY").then(res=>{
        console.log(res.data._id)
        this.item=res.data;
        this.zu.MZPYId = res.data._id
      })
    },
    created() {
      this.getToken();
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
  .sum{
    margin-top: 44px;
  }
  /*.sum-img{*/
    /*padding: 10px;*/
  /*}*/
  /*.sum-img img{*/
    /*width: 105px;*/
    /*height: 105px;*/
  /*}*/
  .sum-shenhe{
    position: absolute;
    bottom: 80px;
    width: 100%;
    text-align: center;
  }
  .sum-zi {
    background-color: #c50206;
    padding: 12px 85px;
    border: none;
    border-radius: 5px;
    color: #fff;
    margin: 0 auto;
    margin-top: 30px;
    font-size: 14px;
  }

  .sum #imgwrap{
    display: flex;
    width: 6.33rem;
    height: 3.333rem;
    border-radius: 4px;
    margin: 1px;
    padding: 10px;
    margin-left: -9px;
  }
  #file-input{
    display: none;
  }

  .sum #imgwrap img{
    float: left;
    width: 150px;
    height: 150px;
    margin-left: 10px;
  }
  .custom-wrap{
    position: fixed;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 2;
  }
  .custom-spinner{
    position: absolute;
    top: 50%;
    left: 50%;
    background: rgba(0,0,0,.5);
    padding: 50px;
    border-radius: 10%;
  }
  .vue-simple-spinner{white-space: nowrap;}
</style>

