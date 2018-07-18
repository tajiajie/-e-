<template>
  <div>
    <div class="top">
      <MyHeader><router-link to="/Home" class="iconfont icon-fanhui"></router-link>随时随地拍</MyHeader>
    </div>
    <!--图列-->
    <div class="photo-list">
      <!--图-->
      <!--<router-link to="/1" class="photo-lista">-->
        <!--<div  class="photo-listtu">-->
          <!--<img src="../assets/02.png" alt="">-->
          <!--<div class="photo-zi">全心全意为人民，图说党章党规党员义务和责任务和责任务和责任</div>-->
        <!--</div>-->
      <!--</router-link>-->
      <router-link :to="'/NEW6?id='+item._id" v-for="item in arr" :key="item.id" class="photo-lista">
        <div class="photo-listtu">
          <img :src="item.img" alt="">
          <div class="photo-zi"><span v-text="item.title"></span></div>
        </div>
      </router-link>
      <!--<router-link to="/3" class="photo-lista">-->
    <!--<div class="photo-listtu">-->
      <!--<img src="../assets/02.png" alt="">-->
      <!--<div class="photo-zi">全心全意为人民，图说党章党规党员义务和责任</div>-->
    <!--</div>-->
  <!--</router-link>-->
  </div>
      <div class="shuju">
        <p>没有数据了</p>
      </div>
  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue';
  export default {
    name: "photograph",
    components:{
      MyHeader
    },
    data(){
      return{
        arr:[]
      }
    },
    mounted(){
      this.$axios.get("getSSSDP").then(res=>{
        console.log(res.data)
        this.arr=res.data;
      })
    }
  }
</script>

<style scoped>
  .top a{
    display: block;
    position: absolute;
    left: 10px;
    color: #fff;
    float: left;
  }
  .photo-list{
    display: flex;
    flex-wrap: wrap; /*让弹性盒元素在必要的时候拆行*/
    margin-top: 44px;
  }
  .photo-list .photo-lista{
    height:140px ;
    width: 42%;
    margin: 20px 10px;
    margin-right: 2px;
    padding-left: 10px;
  }
  .photo-list img{
    width: 155px;
    height: 116px;
  }
.photo-zi{
  font-size: 13px;
  line-height: 1.5;
  overflow: hidden;
  color: #666;
  height: 37px;
  text-overflow: ellipsis;  /*小点点*/
}
 .shuju p{
    color: #666;
    font-size: 14px;
    text-align: center;
    padding: 20px 0;
 }
</style>
