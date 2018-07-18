<template>
  <div>
    <div class="top">
      <MyHeader><router-link to="/know" class="iconfont icon-fanhui"></router-link>参评党员</MyHeader>
    </div>

    <div class="content">
      <router-link :to="'/minzhupingyi2?id='+item._id" class="renyuan" v-for="item in arr">
        <img :src="item.img" alt="">
        <span class="ming"  v-text="item.name">人名</span>
        <span class="zhibu" v-text="item.branchName">党支部</span>
      </router-link>
    </div>
  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue';
  export default {
    name: "canpingdangyuan",
    components:{
      MyHeader
    },
    data(){
      return{
        item:{},
        arr:[]
      }
    },
    mounted(){
      this.$axios.get("canPING",{branchId:this.$route.query.branchId}).then(res=>{
        this.arr = res.data;
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

  .content{
    top: 44px;
    position: absolute;
    right: 0;
    left: 0;

  }
  .renyuan{
    width: 100%;
    height: 52px;
    border: 1px solid #d2d2d2;
    position: relative;
    margin: 0;
    display: flex;
  }
  .renyuan img{
    width: 32px;
    height: 32px;
    border-radius: 50%;
    padding: 10px;
    position: absolute;
  }
  .ming{
    position: absolute;
    display: block;
    line-height: 52px;
    font-size: 16px;
    left: 52px;
  }
  .zhibu{
    position: absolute;
    display: block;
    line-height: 52px;
    right: 10px;
    font-size: 14px;
  }
</style>
