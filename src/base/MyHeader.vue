<template>
  <div class="header">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "MyHeader"
    }
</script>

<style scoped>
  .header{
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #C50206;
    height: 44px;
    text-align: center;
    line-height: 44px;
    color: #fff;
    font-size: 18px;
   }
</style>
