<template>
  <div :style="{ width:'100%', height:'100%' }" />
</template>

<script>
  export default {
    props: {
      point: Array,
      zoom: {
        type: Number,
        default: 5
      },
      enableScroll: Boolean
    },
    mounted() {
      const { Map, Point } = this.$bmap
      const map = new Map(this.$el)
      const point = new Point(this.point[0], this.point[1])
      map.centerAndZoom(point, this.zoom)
      map.enableScrollWheelZoom(this.enableScroll)
    }
  }
</script>

<style lang="scss">
  .BMap_cpyCtrl {
    display: none;
  }
</style>
