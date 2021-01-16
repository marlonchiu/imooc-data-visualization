<template>
  <BaiduMap
    :point="[121.475941, 31.224319]"
    :zoom="10"
    enable-scroll
  />
</template>

<script>
  import BaiduMap from '../components/BaiduMap'
  export default {
    components: { BaiduMap }
  }
</script>

<style scoped>
</style>
