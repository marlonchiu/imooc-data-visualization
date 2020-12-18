<template>
  <!-- <svg width="200px" height="200px" viewBox="0 0 100 100">
    <line x1="0" y1="50" x2="100" y2="50" stroke-width="8" stroke="currentColor" />
    <line x1="50" y1="0" x2="50" y2="100" stroke-width="8" stroke="currentColor" />
  </svg> -->
  <div>
    <svg width="500" height="200" viewBox="0 0 50 20" style="border: 1px solid #000000">
      <rect x="10" y="10" width="10" height="5" style="stroke: #000000; fill: none" />
    </svg>
    <!-- !! 上边等价于下边的  但下边不推荐 -->
    <svg width="500" height="200" style="border: 1px solid #000000">
      <rect x="100" y="100" width="100" height="50" stroke-width="10" style="stroke: #000000; fill: none" />
    </svg>
    <svg
      width="500"
      height="200"
      viewBox="0 0 200 200"
      style="border: 1px solid #000000"
      preserveAspectRatio="xMinYMid meet"
    >
      <rect x="100" y="100" width="100" height="50" stroke-width="10" style="stroke: #000000; fill: none" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'SvgComponent'
}
/**
 * TODO preserveAspectRatio
 * preserveAspectRatio
 * 是一个较难理解的概念，它相当于在 viewport 内部绘制了一个虚拟内框，
 * 它的默认值为：xMidYMid meet
 */
</script>

<style lang="scss" scoped>
</style>
