<template>
  <div>
    <div class="top">
      <MyHeader><router-link to="/Home" class="iconfont icon-fanhui"></router-link>随时随地学</MyHeader>
    </div>

    <!--新闻-->
    <div class="news-list">
      <router-link :to="'/NEW5?id='+item._id" v-for="item in arr" :key="item.id"  class="newsrow">
        <div class="news-listtu">
          <img :src="item.img" alt="">
        </div>
        <div class="newscol">
          <div class="newsnotice-title"><span v-text="item.title"></span></div>
          <div class="newsnotice-time">
            <span v-text="item.updateTime"></span>
            <span class="newscounter"><i class="iconfont icon-chakan1"></i><span v-text="item.number"></span></span>
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
    name: "study",
    components:{
      MyHeader
    },
    data(){
      return{
        arr:[]
      }
    },
    mounted(){
      this.$axios.get("getSSSDX").then(res=>{
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

  .news-list{
    top: 44px;
    position: absolute;
    right: 0;
    left: 0;
  }
  .newsrow{
    margin: 0;
    padding: 10px 0 5px;
    color: #666;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    display: flex;
    width: 100%;
    outline: 0;
    height: 85px;
  }
  .news-listtu img{
    text-align: center;
    flex: 0 0 20%;
    display: block;
    width: 80px;
    height: 80px;
    padding: 0 5px;
  }

  .newscol .newsnotice-title{
    flex: 1;
    display: block;
    color: #000;
    font-size: 16px;
    padding: 0 12px 20px 0;
  }
  .newscounter{
    float: right;
    margin: 0 15px;
  }
  .newscounter .iconfont{
    font-size: 12px;
    color: #CDCDCD;
    right: 40px;
    padding-right: 8px;
  }
  .newscol .newsnotice-time{
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
