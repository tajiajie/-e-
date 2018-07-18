<template>
  <div id="app">
    <!--<Tab></Tab>-->
    <router-view/>
    <Tab v-if="$route.name=='Home'||$route.name=='Found'||$route.name=='My'"></Tab>
  </div>
</template>

<script>
  import Tab from './base/Tab.vue'
  export default {
  name: 'App',
    components:{
      Tab
    }
}
</script>

<style>
  @import 'style/init.css';
</style>
