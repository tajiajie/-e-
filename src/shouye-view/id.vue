<template>
  <div>
    <div class="top">
      <MyHeader><router-link to="/Home" class="iconfont icon-fanhui"></router-link>党员亮身份</MyHeader>
    </div>

    <div class="id-list">
      <router-link :to="'/NEW3?id='+item._id" v-for="item in arr" :key="item.id" class="idrow">
        <div class="id-listtu">
          <img :src="item.img" alt="">
        </div>
        <div class="idcol">
          <div class="idnotice-title"><span v-text="item.title"></span></div>
          <div class="idnotice-time">
            <span v-text="item.updateTime"></span>
            <span class="idcounter"><i class="iconfont icon-chakan1"></i><span v-text="item.number"></span></span>
          </div>
        </div>
      </router-link>
      <div class="shuju">
        <span>没有数据了</span>
      </div>
    </div>
  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue';
  export default {
    name: "id",
    components:{
      MyHeader
    },
    data(){
      return{
        arr:[]
      }
    },
    mounted(){
      this.$axios.get("getDYLSF").then(res=>{
        console.log(res.data)
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
  .id-list{
    top: 44px;
    position: absolute;
    right: 0;
    left: 0;
  }
  .idrow{
    margin: 0;
    padding: 10px 0 5px;
    color: #666;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    display: flex;
    width: 100%;
    outline: 0;
    height: 85px;
  }
  .id-listtu img{
    text-align: center;
    flex: 0 0 20%;
    display: block;
    width: 80px;
    height: 80px;
    padding: 0 5px;
  }

  .idcol .idnotice-title{
    flex: 1;
    display: block;
    color: #000;
    font-size: 16px;
    padding: 0 12px 20px 0;
  }
  .idcounter{
    float: right;
    margin: 0 15px;
  }
  .idcounter .iconfont{
    font-size: 12px;
    color: #CDCDCD;
    right: 40px;
    padding-right: 8px;
  }
  .idcol .idnotice-time{
    color: #666;
    font-size: 8px;
  }
  .shuju{
    color: #666;
    font-size: 14px;
    text-align: center;
    padding: 10px 0;
  }
</style>
