<template>
  <vue-echarts :options="options"/>
</template>

<script>
  import 'echarts/extension/bmap/bmap'

  export default {
    data() {
      return {
        options: {
          bmap: {
            key: 'G1LFyjrNGIkns5OfpZnrCGAKxpycPLwb',
            center: [104.114129, 37.550339],
            zoom: 5,
            roam: true
          }
        }
      }
    }
  }
</script>

<style>
  .echarts {
    width: 100%!important;
    height: 100%!important;
  }
</style>
<style lang="scss" scoped>
</style>
