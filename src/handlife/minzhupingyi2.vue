<template>
  <div>
    <div class="top">
      <MyHeader><router-link to="/canpingdangyuan" class="iconfont icon-fanhui"></router-link>民主评议</MyHeader>
    </div>

    <!---->
    <div class="know">
      <div class="firctr">个人总结</div>
    </div>

    <div class="zongjietu">
      <img :src="item.pic" alt="">
    </div>

    <div class="di">
      <form class="geshi">
        <!--<input type="radio" name="choose" id="male" />-->
        <!--<label for="male">优</label>-->
        <!--<input type="radio" name="choose" id="female" />-->
        <!--<label for="female">良</label>-->
        <!--<input type="radio" name="choose" id="female1" />-->
        <!--<label for="female1">中</label>-->
        <!--<input type="radio" name="choose" id="female2" />-->
        <!--<label for="female2">差</label>-->
        <span class="you">
         <input type="radio" name="choose" value="0" id="you">
           <label for="you">&nbsp;优</label>
         </span>
        <span class="liang">
           <input type="radio" name="choose" value="1" id="liang">
           <label for="liang">&nbsp;良</label>
         </span>
        <span class="zhong">
         <input type="radio" name="choose" value="2" id="zhong">
           <label for="zhong">&nbsp;中</label>
         </span>
        <span class="cha">
         <input type="radio" name="choose" value="3" id="cha">
           <label for="cha">&nbsp;差</label>
         </span>
        <button class="tijiao">提交</button>
      </form>
    </div>

  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue';
  export default {
    name: "minzhupingyi2",
    components:{
      MyHeader
    },
    data(){
      return{
        item:{},
        zuid:{
          MZPYId:'',
          otherUserId:this.$route.query.id
        },
      }
    },
    mounted(){
      this.$axios.get("getMZPY").then(res=>{
        // console.log(res)
        this.item=res.data;
        this.zuid.MZPYId = res.data._id
        this.$axios.get("hqZj",{otherUserId:this.$route.query.id,MZPYId:this.zuid.MZPYId}).then(res=>{
          console.log(res.data)
          this.item = res.data
        })

      })

    },
  }
</script>

<style scoped>
  .top a{
    position: absolute;
    left: 10px;
    color: #fff;
    float: left;
  }

  .know {
    position: absolute;
    top: 44px;
    width: 100%;
    height: 100%;
  }
  .firctr{
    font-size: 16px;
    width: 100%;
    color: #000;
    margin: 15px 0;
    line-height: 30px;
    text-align: center;
  }
  .zongjietu{
    width: 93%;
    height: 172px;
    margin-top: 110px;
    margin-left: 7px;
    border: 6px solid #eee;
    border-radius: 5px;
  }
  .zongjietu img{
    width: 100%;
    height: 172px;
  }

  .di{
    width: 100%;
    height: 45px;
    position: absolute;
    bottom: 0;
    background: #eee;
  }
  .geshi{
    color: #f00;
    font-size: 14px;
    margin: 0 15px;
    line-height: 45px;
  }
  .tijiao{
    border:1px solid #f00;
    border-radius: 5px;
    color: #f00;
    font-size: 14px;
    width: 50px;
    height: 25px;
    background: #fff;
    float: right;
    margin: 10px 0;
  }


  .di input[type="radio"]+label::before{
    content: '\a0';
    display:inline-block;
    vertical-align: middle;
    font-size: 16px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #fff;
    line-height: 1;
  }
  .di input[type="radio"]:checked+label::before{
    background-clip:content-box;
    background-image:url("../assets/checkbox.png") ;
    background-size: 100%;
  }
  .di input[type="radio"]{
    position: absolute;
    clip:rect(0,0,0,0);
  }

  /*.geshi #male,#female,#female1,#female2{*/
    /*width: 18px;*/
    /*height: 18px;*/
  /*}*/
</style>
