<template>
  <div>
    <div class="top">
      <MyHeader><router-link to="/Zuzhilife" class="iconfont icon-fanhui"></router-link>流动党员找组织</MyHeader>
    </div>

    <div class="map-wrap">
      <div id="bd"></div>
    </div>
  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue';
  export default {
    name: "mymap",
    components:{
      MyHeader
    },
    data(){
      return {
        map: null
      }
    },
    methods: {
      initMap(){
        var mp = new BMap.Map('bd');
        mp.centerAndZoom(new BMap.Point(116.296382,40.150416), 18);
        var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_ZOOM, offset: new BMap.Size(20, 60)});
        var marker = new BMap.Marker(new BMap.Point(116.296382,40.150416));
        mp.addOverlay(marker);//声明一个标记点
        var label = new BMap.Label("华杉华杉，我是华杉",{offset:new BMap.Size(20,-10)});//声明一个文字标注
        marker.setLabel(label);
        var geolocationControl = new BMap.GeolocationControl();
        mp.addControl(geolocationControl);
        mp.addControl(top_right_navigation);
      }
    },
    created(){
      this.$nextTick(() => {
        this.initMap();
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

  .map-wrap{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
  }
  #bd{
    /*z-index: 999;*/
    /*position: fixed;*/
    /*top: 0;*/
    /*left: 0;*/
    /*right: 0;*/
    /*bottom: 0;*/
    height: 100%;
    width: 100%;
  }
</style>
