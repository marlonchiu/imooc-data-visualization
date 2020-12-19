<template>
  <div class="imooc-fly-box" :ref="refName">
    <svg :width="width" :height="height">
      <defs>
        <path
          id="fly-box-path"
          :d="path"
          fill="none"
        ></path>
        <radialGradient
          id="radial-gradient"
          cx="50%"
          cy="50%"
          fx="100%"
          fy="50%"
          r="50%"
        >
          <stop offset="0%" stop-color="white" stop-opacity="1"></stop>
          <stop offset="100%" stop-color="white" stop-opacity="0"></stop>
        </radialGradient>
        <mask id="fly-box-mask">
          <circle :r="starLength" cx="0" cy="0" fill="url(#radial-gradient)">
            <animateMotion
              :dur="`${duration}s`"
              :path="path"
              rotate="auto"
              repeatCount="indefinite"
            />
          </circle>
        </mask>
      </defs>
      <use
        href="#fly-box-path"
        :stroke="lineColor"
        stroke-width="1"
      />
      <use
        href="#fly-box-path"
        :stroke="starColor"
        stroke-width="3"
        mask="url(#fly-box-mask)"
      />
    </svg>
    <div class="imooc-fly-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed, getCurrentInstance } from 'vue'
export default {
  name: 'ImoocFlyBox',
  props: {
    lineColor: {
      type: String,
      default: '#235FA7'
    },
    starColor: {
      type: String,
      default: '#4fd2dd'
    },
    // 流星线长度
    starLength: {
      type: [Number, String],
      default: 50
    },
    duration: {
      type: [Number, String],
      default: 3
    }
  },
  setup(props) {
    const width = ref(0)
    const height = ref(0)
    const refName= 'imoocFlyBox'

    const path = computed(() => {
      // M5 5 L395 5 L395 395 L5 395 Z
      return `M5 5 L${width.value - 5} 5 L${width.value - 5} ${height.value - 5} L5 ${height.value - 5} Z`
    })

    onMounted(() => {
      const instance = getCurrentInstance()
      const dom = instance.ctx.$refs[refName]
      width.value = dom.clientWidth
      height.value = dom.clientHeight
    })

    return {
      width,
      height,
      path,
      refName
    }
  }
}
</script>

<style lang="scss" scoped>
.imooc-fly-box {
  position: relative;
  width: 100%;
  height: 100%;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .imooc-fly-box-content {
    width: 100%;
    height: 100%;
    padding: 5px;
    box-sizing: border-box;
  }
}
</style>
