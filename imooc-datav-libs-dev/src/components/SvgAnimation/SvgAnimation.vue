<template>
  <div class="container">
    <svg width="500" height="200" viewBox="0 0 500 200">
      <rect x="0" y="0" width="100" height="50" fill="red" transform="translate(10,10)" />
    </svg>
    <svg width="500" height="200" viewBox="0 0 500 200">
      <rect x="0" y="0" width="100" height="50" fill="red" transform="translate(10,10)" />
    </svg>
    <!-- skewX 和 skewY 斜切  -->
    <!-- skewX 沿X轴逆时针 ；skewY 沿Y轴顺时针  -->
    <svg width="500" height="200" viewBox="0 0 500 200">
      <rect x="0" y="0" width="100" height="50" fill="red" transform="translate(10,10) skewX(30)" />
    </svg>
    <svg width="500" height="200" viewBox="0 0 500 200">
      <rect x="0" y="0" width="100" height="50" fill="red" transform="translate(10,10) skewY(30)" />
    </svg>
    <svg width="500" height="200" viewBox="0 0 500 200">
      <rect x="0" y="0" width="100" height="50" fill="red" transform="translate(10,10) scale(1.5)" />
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
