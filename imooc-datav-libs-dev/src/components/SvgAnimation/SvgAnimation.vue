<template>
  <div class="container">
    <!-- <svg width="500" height="200" viewBox="0 0 500 200">
      <rect x="0" y="0" width="100" height="50" fill="red" transform="translate(10,10)" />
    </svg> -->
    <!-- <svg width="500" height="200" viewBox="0 0 500 200">
      <rect x="0" y="0" width="100" height="50" fill="red" transform="translate(10,10)" />
    </svg> -->
    <!-- skewX 和 skewY 斜切  -->
    <!-- skewX 沿X轴逆时针 ；skewY 沿Y轴顺时针  -->
    <!-- <svg width="500" height="200" viewBox="0 0 500 200">
      <rect x="0" y="0" width="100" height="50" fill="red" transform="translate(10,10) skewX(30)" />
    </svg> -->
    <!-- <svg width="500" height="200" viewBox="0 0 500 200">
      <rect x="0" y="0" width="100" height="50" fill="red" transform="translate(10,10) skewY(30)" />
    </svg> -->
    <!-- <svg width="500" height="200" viewBox="0 0 500 200">
      <rect x="0" y="0" width="100" height="50" fill="red" transform="translate(10,10) scale(1.5)" />
    </svg> -->
    <!-- matrix 复杂变形 -->
    <!--
      复杂变换执行逻辑
      六个值分为奇数偶数两组
      [2 -1 50]  => 2 * oldX + (-1) * oldY + 50 = newX
      [1 2 0]  => 1 * oldX + 2 * oldY + 0 = newY

      四个顶点坐标
      [0,0]  => [50, 0]
      [100,0]  => [250, 100]
      [100,50]  => [200, 200]
      [0,50]  => [0, 100]
     -->
    <svg width="500" height="200" viewBox="0 0 500 200">
      <rect x="0" y="0" width="100" height="50" fill="red" transform="matrix(2 1 -1 2 50 0)" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'SvgAnimation'
}
</script>

<style lang="scss" scoped>
.container {
  svg {
    border: 1px solid #333;
  }
}
</style>
