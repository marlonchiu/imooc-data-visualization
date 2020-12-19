<template>
  <div>
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
      <!-- <svg width="500" height="200" viewBox="0 0 500 200">
        <rect x="0" y="0" width="100" height="50" fill="red" transform="matrix(2 1 -1 2 50 0)" />
      </svg> -->
      <svg width="500" height="200" viewBox="0 0 500 200">
        <rect
          class="rect"
          x="10"
          y="10"
          width="100"
          height="50"
          stroke-width="5"
          stroke="#f00"
          fill="none"
        />
      </svg>
    </div>
    <div class="container">
      <!-- 案例1：环形进度条 -->
      <!-- 矩阵两种写法都可以 -->
      <!-- transform="matrix(0 -1 1 0 0 440)" -->
      <!-- transform="matrix(0,-1,1,0,0,440)" -->
      <svg width="440" height="440" viewBox="0 0 440 440">
        <circle cx="220" cy="220" r="200" stroke-width="20" stroke="#d1d3d7" fill="none"/>
        <!-- 圆的周长 2*3.14*200 = 1256 -->
        <circle
          class="circle"
          cx="220"
          cy="220"
          r="200"
          stroke-width="20"
          stroke="#00a5e0"
          fill="none"
          transform="matrix(0 -1 1 0 0 440)"
        />
      </svg>
    </div>
    <div class="container">
      <svg width="200" height="200" viewBox="0 0 200 200">
        <rect x="0" y="0" width="200" height="200" fill="none" stroke="grey" stroke-width="8"></rect>
        <rect
          class="rect-process"
          x="0"
          y="0"
          width="200"
          height="200"
          fill="none"
          stroke="deeppink"
          stroke-width="8"
        ></rect>
      </svg>
    </div>
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

.rect {
  stroke-dasharray: 10 20;
}

.circle {
  animation: circle 5s linear infinite;
}
@keyframes circle {
  from {
    stroke-dasharray: 0 1256;
  }
  to {
    stroke-dasharray: 1256 0;
  }
}

.rect-process {
  animation: rect-process 5s linear infinite;
}
@keyframes rect-process {
  from {
    stroke-dasharray: 0 800;
  }
  to {
    stroke-dasharray: 800 0;
  }
}
</style>
