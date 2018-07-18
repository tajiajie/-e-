<template>
  <div class="dadahe">
    <div class="top">
      <MyHeader><router-link to="/yunhudong" class="iconfont icon-fanhui"></router-link>党员云互动</MyHeader>
    </div>

    <div class="yunyun">
      <div class="yunhu">
        <ul class="lxyztlqList">
          <li class="item">
            <div class="top clearfix">
              <div class="touxiang">
                <img :src="item.userAvatar">
              </div>
              <div class="top-center">
                <div class="nickname" v-text="item.userName">test6</div>

                <div class="time">
                  <span class="time1">
                    <span>
                      <i class="iconfont icon-shijian"></i>
                    </span>
                    <span v-text="item.createTime">2018-04-15 14:55:47</span>
                </span>
                </div>

              </div>
            </div>
            <div class="content" v-text="item.content">支持我党</div>
          </li>
        </ul>
      </div>

      <div class="yunhu" v-for="item2 in arr">
        <ul class="lxyztlqList">
          <li class="item">
            <div class="top clearfix">
              <div class="touxiang">
                <img :src="item2.userAvatar">
              </div>
              <div class="top-center">
                <div class="nickname" v-text="item2.userName">test6</div>

                <div class="time">
                  <span class="time1">
                    <span>
                      <i class="iconfont icon-shijian"></i>
                    </span>
                    <span v-text="item2.createTime">2018-04-15 14:55:47</span>
                </span>
                </div>

              </div>
            </div>
            <div class="content" v-text="item2.content">支持我党</div>
          </li>
        </ul>
      </div>


      <div class="shuju">
        <span>还没有数据</span>
      </div>

      <div class="pinglun">
        <label class="pinglunkuang">
          <input type="text" placeholder="评论内容" v-model="item1.content">
        </label>
        <button @click="pinglun">评论</button>
      </div>
    </div>
  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue';
  export default {
    name: "yunhudong1",
    components:{
      MyHeader
    },
    data(){
      return{
        item:{},
        item1:{
          toUserId:'',
          parentId:'',
          content:'',
        },
        arr:[]
      }
    },
    methods:{
      pinglun(){
        this.$axios.post("yunPinglun",this.item1).then(res=> {
          // this.user = res.data;
          if (res.code == 200) {
            this.$router.go()
          }

      })
      },
      reply() {
        this.$axios.get("yunHuoping",{parentId: this.$route.query.id}).then(res => {
          console.log(res)
          this.arr = res.data
        })
      }
    },
    created() {
      this.reply()
    },

    mounted(){
      this.$axios.get("yunHuoqu",{id: this.$route.query.id}).then(res => {
        // console.log(res)
        this.item = res.data;
        this.item1.parentId = res.data._id;
        this.item1.toUserId = res.data.userId;
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
  .dadahe{
    background: #EFEFF4;
    width: 100%;
    height: 100%;
  }
  .yunyun{
    margin-top: 44px;
    overflow: hidden;
  }
   .item{
    overflow: hidden;
    border: 1px solid #EFEFF4;
    background-color: #fff;
    color: #444;
    position: relative;
    display: block;
    padding: 16px;
    font-size: 16px;
    margin: 10px;
  }
  .touxiang{
    width: 33px;
    height: 33px;
    float: left;
    overflow: hidden;
  }
  .yunyun img{
    width: 33px;
    height: 33px;
    border-radius: 50%;
  }

  .top-center{
    margin-left: 10px;
    margin-top: 0;
    margin-bottom: 5px;
    float: left;
    overflow: hidden;
  }
  .time{
    font-size: 12px;
    display: block;
    width: 220px;
    height: 21px;
    clear: both;
    overflow: hidden;
  }
  .time .iconfont{
    font-size: 12px;
  }
  .content{
    padding: 10px 0;
    position: relative;
  }


  .shuju{
    color: #666;
    font-size: 14px;
    text-align: center;
    padding: 10px 0;
    margin-bottom: 50px;
  }

  .pinglun{
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    background-color: #fff;
    color: #444;
    font-size: 16px;
    position: fixed;
    bottom: 0;
    z-index: 99;
  }

  input{
    border: 1px solid #c50206;
    background: #fff;
    border-radius: 4px;
    padding: 0 8px;
    height: 29px;
    width: 78%;
  }
button{
  border: 1px solid  #c50206;
  border-radius: 4px;
  background:  #c50206;
  color: #fff;
  height: 31px;
  width: 34px;
  margin-left: 6px;
}
</style>
