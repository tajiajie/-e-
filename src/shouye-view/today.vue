<template>
  <div>
    <div class="top">
      <MyHeader><router-link to="/Home" class="iconfont icon-fanhui"></router-link>党史上的今天</MyHeader>
    </div>

      <div class="pzi" v-html="item.data"></div>

  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue';
  export default {
    name: "today",
    components:{
      MyHeader
    },
    data(){
      return{
        item:{}
      }
    },
    mounted(){
      this.$axios.get("getDSSDJT").then(res=>{
        console.log(res)
        this.item=res
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

</style>

<style>
  .pzi{
    margin-top: 44px;
    padding: 10px;
    font-size: 14px;
    color: #000;
  }
  .pzi h2{
    font-size: 24px;
    margin-bottom: 10px;
  }
   .pzi p{
    display: block;
    line-height: 2;
    margin: 0 0 10px;
  }
  .pzi img{
    width: 100%;
    height: 200px;
  }
</style>
