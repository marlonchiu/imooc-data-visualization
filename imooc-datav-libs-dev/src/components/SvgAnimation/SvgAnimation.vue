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

    <!-- 案例2：LOGO 描边 -->
    <div class="container">
      <svg
        viewBox="0 0 1024 1024"
        width="200"
        height="200"
      >
        <path class="logo" d="M786.731708 648C807.42218 648 824.195121 603.109084 824.195121 547.733333 824.195121 492.357583 807.42218 447.466667 786.731708 447.466667 766.041235 447.466667 749.268292 492.357583 749.268292 547.733333 749.268292 603.109084 766.041235 648 786.731708 648ZM462.048781 698.133333C482.739253 698.133333 499.512194 658.853781 499.512194 610.4 499.512194 561.946217 482.739253 522.666667 462.048781 522.666667 441.358308 522.666667 424.585365 561.946217 424.585365 610.4 424.585365 658.853781 441.358308 698.133333 462.048781 698.133333ZM0 572.8C0 822.813926 229.933961 1024 512 1024 794.066039 1024 1024 822.813926 1024 572.8 1024 322.786074 794.066039 121.599999 512 121.599999 515.649685 121.599999 516.946722 122.183253 516.866057 122.124053 514.736119 120.560928 512.302005 118.428984 505.789668 112.472612 487.675081 95.904489 476.340222 86.603485 458.812092 75.393661 404.94781 40.945655 334.29571 21.333333 237.268292 21.333333 223.474645 21.333333 212.292683 32.556062 212.292683 46.4 212.292683 60.243938 223.474645 71.466667 237.268292 71.466667 325.013274 71.466667 386.336418 88.489363 431.969129 117.673005 444.078925 125.417623 494.717728 171.733333 512 171.733333 767.886246 171.733333 974.048781 352.120043 974.048781 572.8 974.048781 793.479955 767.886246 973.866667 512 973.866667 256.113754 973.866667 49.951219 793.479955 49.951219 572.8 49.951219 427.029845 140.536466 294.462295 284.745583 223.557118 297.132651 217.466607 302.254953 202.450961 296.186566 190.018733 290.11818 177.586505 275.157079 172.445527 262.770012 178.536038 102.138268 257.515945 0 406.990833 0 572.8Z" p-id="1259"></path>
      </svg>
    </div>
    <div class="container">
      <svg class="line-container" width="400" height="400" viewBox="0 0 400 400">
        <line class="line" x1="0" y1="50" x2="400" y2="50" fill="none" stroke="red" stroke-width="20"/>
      </svg>
    </div>
    <!-- SMIL -->
    <div class="container">
      <svg width="200" height="200" viewBox="0 0 200 200">
        <rect x="0" y="0" width="100" height="50" fill="red">
          <set attributeName="x" attributeType="XML" to="10" begin="1s"></set>
          <set attributeName="x" attributeType="XML" to="20" begin="2s"></set>
          <set attributeName="fill" attributeType="XML" to="blue" begin="3s"></set>
        </rect>
      </svg>
    </div>
    <!-- 案例一：移动的小球 -->
    <div class="container">
      <svg width="500" height="200" viewBox="0 0 500 200">
        <circle cx="0" cy="0" r="30" fill="blue" stroke="black" stroke-width="1">
          <animate attributeName="cx" attributeType="XML" from="0" to="200" dur="2s" repeatCount="2" fill="freeze" />
          <animate attributeName="cy" attributeType="XML" from="0" to="200" dur="2s" repeatCount="2" fill="freeze" />
          <animate attributeName="fill" attributeType="XML" from="blue" to="red" dur="2s" repeatCount="2" fill="freeze" />
          <animateTransform attributeName="transform" attributeType="XML" begin="0s" dur="2s" type="scale" from="1" to="2" repeatCount="2" fill="freeze" />
        </circle>
      </svg>
    </div>
    <!-- 案例二：形状补间动画 -->
    <div class="container">
      <svg width="400" height="400">
        <polygon points="30 30 70 30 90 70 10 70" fill="#fcc" stroke="black">
          <animate attributeName="points" attributeType="XML" to="50 30 70 50 50 90 30 50" dur="5s" fill="freeze" repeatCount="1" />
        </polygon>
      </svg>
    </div>
    <!-- 案例一：按 path 轨迹运动的正方形 -->
    <div class="container">
      <svg width="200" height="200" viewBox="0 0 200 200">
        <rect x="0" y="0" width="10" height="10" fill="red">
          <animateMotion
            path="M10 10 L110 10 L110 110 L10 110 Z"
            dur="5s"
            rotate="0"
            fill="freeze"
            repeatCount="3"
          />
        </rect>
        <path d="M10 10 L110 10 L110 110 L10 110 Z" fill="none" stroke="green" stroke-width="1"></path>
      </svg>
    </div>
    <!-- 案例二：混合动画 -->
    <div class="container">
      <svg width="200" height="200" viewBox="0 0 200 200">
        <rect x="0" y="0" width="10" height="10" fill="red">
          <animateMotion
            id="forward-rect"
            path="M10 10 L110 10 L110 110 L10 110"
            dur="2s"
            rotate="0"
            fill="freeze"
            begin="0; backward-rect.end + 0.5s"
          />
          <animateMotion
            id="backward-rect"
            path="M10 110 L110 110 L110 10 L10 10"
            dur="2s"
            rotate="0"
            fill="freeze"
            begin="forward-rect.end + 0.5s"
          />
          <animate
            id="red-to-blue"
            attributeName="fill"
            attributeType="XML"
            from="red"
            to="blue"
            dur="2s"
            fill="freeze"
            begin="0; blue-to-red.end + 0.5s"
          />
          <animate
            id="blue-to-red"
            attributeName="fill"
            attributeType="XML"
            from="blue"
            to="red"
            dur="2s"
            fill="freeze"
            begin="red-to-blue.end + 0.5s"
          />
        </rect>
        <path d="M10 10 L110 10 L110 110 L10 110" fill="none" stroke="green" stroke-width="1"></path>
      </svg>
    </div>
    <!-- 案例三：点击变色或位移 -->
    <div class="container">
      <svg viewBox="0 0 200 200" width="200" height="200">
        <g id="rect1">
          <rect x="0" y="0" rx="0" ry="0" width="100" height="100" fill="red">
            <animate
              attributeType="XML"
              attributeName="fill"
              from="red"
              to="green"
              begin="rect1.click"
              dur="2s"
              fill="freeze"
            />
          </rect>
        </g>
        <animateTransform
          attributeType="XML"
          attributeName="transform"
          type="translate"
          from="0, 0"
          to="50, 50"
          begin="rect1.click"
          dur="2s"
          fill="freeze"
        />
        <rect x="0" y="100" width="100" height="100" fill="blue">
          <animate
            attributeType="XML"
            attributeName="fill"
            from="blue"
            to="green"
            begin="rect1.click"
            dur="2s"
            fill="freeze"
          />
        </rect>
      </svg>
    </div>
    <!-- 蒙版 mask -->
    <div class="container bg-grey">
      <svg width="400" height="400">
        <defs>
          <mask id="test-mask">
            <rect x="5" y="5" width="390" height="390" fill="purple"></rect>
            <circle r="50" cx="150" cy="150"></circle>
          </mask>
          <!-- <linearGradient id="test-linear-gradient">
            <stop offset="0%" stop-color="red" stop-opacity="1"></stop>
            <stop offset="50%" stop-color="green"></stop>
            <stop offset="100%" stop-color="blue" stop-opacity="0.5"></stop>
          </linearGradient> -->
          <radialGradient
            id="test-radial-gradient"
            cx="50%"
            cy="50%"
            fx="50%"
            fy="50%"
            r="50%"
          >
            <stop offset="0%" stop-color="white" stop-opacity="1"></stop>
<!--            <stop offset="10%" stop-color="yellow"></stop>-->
<!--            <stop offset="90%" stop-color="red" stop-opacity="0.2"></stop>-->
            <stop offset="100%" stop-color="white" stop-opacity="0"></stop>
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="150" fill="url(#test-radial-gradient)"></circle>
        <!-- <rect x="5" y="5" width="390" height="390" fill="url(#test-radial-gradient)"></rect> -->
        <!-- <rect x="5" y="5" width="390" height="390" fill="url(#test-linear-gradient)"></rect> -->
        <!-- <rect x="5" y="5" width="390" height="390" fill="red"></rect> -->
        <!-- <rect x="5" y="5" width="390" height="390" fill="blue" mask="url(#test-mask)"></rect> -->
      </svg>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
export default {
  name: 'SvgAnimation',
  setup() {
    onMounted(() => {
      console.log('onMounted: ')
      const path = document.getElementsByClassName('logo')[0]
      const pathLen = path.getTotalLength() // 6885
      console.log('pathLen: ', pathLen)
    })
  }
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

.logo {
  fill: none;
  stroke: #333;
  stroke-width: 5;
  animation: logo 6s linear 1 forwards;
}

@keyframes logo {
  0% {
    fill: white;
    stroke: #333;
    stroke-dasharray: 6885;
    stroke-dashoffset: 6885;
  }
  50% {
    fill: white;
    stroke: #333;
    stroke-dasharray: 6885;
    stroke-dashoffset: 0;
  }
  75% {
    fill: red;
    stroke: white;
  }
  100% {
    fill: blue;
    stroke: white;
  }
}

.line-container {
  &:hover {
    .line {
      stroke-dashoffset: 0;
    }
  }
}
.line {
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  transition: stroke-dashoffset 0.5s linear;
}
.bg-grey {
  background: #333;
}
</style>
