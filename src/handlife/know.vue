<template>
  <div>
    <div class="top">
      <MyHeader><router-link to="/Zuzhilife" class="iconfont icon-fanhui"></router-link>民主评议</MyHeader>
    </div>

    <!---->
    <div class="know">
      <div class="firctr">
        <p class="firhead">评议须知</p>
        <div class="content" v-text="item.content">
        </div>
        <div class="firbtnctrl ">
          <div class="clearfix">
            <div class="selectBtnWrap">
              <select name="" class="branchSelect" v-model="Branchid">
                <option value="">请选择</option>
                <option :value="item._id" v-for="item in arr" v-text="item.branchName"></option>
              </select>
            </div>
            <button class="nextBtn" @click="shj">下一步</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue';
  export default {
    name: "know",
    components:{
      MyHeader
    },
    data(){
      return{
       arr:[],
        item:{},
        Branchid:""
      }
    },
    mounted(){
      this.$axios.get("getbranch").then(res=>{
        this.arr=res.data;
      })
      this.$axios.get("getMZPY").then(res=>{
        console.log(res.data._id)
        this.item=res.data;
      })
      // this.$axios.get("canPING").then(res=>{
      //   console.log(res.data)
      //   this.arr=res.data;
      // })
    },
    methods:{
      shj(){
        console.log(this.Branchid);
        this.$router.push({path:'/canpingdangyuan',query:{branchId:this.Branchid}})
      }
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

  .know{
    position: absolute;
    top: 44px;
    background: #fff;
  }
  .firctr{
    margin-top: 5%;
  }
  .firhead{
    text-align: center;
    font-size: 16px;
    margin: 0 0 10px;
  }
  .content{
    padding: 10px;
    font-size: 16px;
    line-height: 1.5;
    color: #666;
    position: relative;
  }
  .firbtnctrl{
    top: 460px;
    position: absolute;
    text-align: center;
  }
  .clearfix{
    width: 100%;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font: inherit;
    font-size: 100%;
  }
  .selectBtnWrap{
    width: 187px;
    height: 42px;
    margin-left: 36px;
    margin-right: 16px;
    float: left;
  }
  .branchSelect{
    border: 1px solid transparent;
    height: 100%;
    width: 100%;
    background: #c50206;
    color: #fff;
    border-radius: 5px;
    text-align: center;
    padding-left: 26px;
    font-size: 14px;
  }
  .nextBtn{
    width: 94px;
    height: 43px;
    border-radius: 5px;
    line-height: 41px;
    background: #c50206;
    color: #fff;
    float: left;
    font-size: 12px;
    border: 0;
  }
</style>
