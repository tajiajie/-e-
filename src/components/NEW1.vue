<template>
  <div>
    <div class="top">
      <MyHeader><router-link to="/neweye" class="iconfont icon-fanhui"></router-link>信工新闻眼</MyHeader>
    </div>

    <div class="neirong">
       <h1 v-text="item.title"></h1>
      <!--<img :src="item.img" alt="">-->
      <div class="pzi" v-html="item.content"></div>
    </div>
  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue';
  export default {
    name: "NEW1",
    components:{
      MyHeader
    },
    data(){
      return{
        item:{}
      }
    },
    mounted(){
      this.$axios.get("getNews",{id:this.$route.query.id}).then(res=>{
        // console.log(res.data)
        this.item=res.data[0];
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

  .neirong {
  margin-top: 44px;
    padding: 10px;
  }



</style>

<style>
  .neirong h1{
    font-size: 24px;
    margin-bottom: 10px;
    color: #000;
    font-weight: 500;
    line-height: 1.2;
  }
  .neirong .pzi p{
    display: block;
    line-height: 2;
    margin: 0 0 10px;
  }
  .pzi img{
    width: 100%;
    height: 200px;
  }
</style>
