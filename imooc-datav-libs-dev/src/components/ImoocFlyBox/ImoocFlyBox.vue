<template>
  <div class="imooc-fly-box" :ref="refName">
    <svg :width="width" :height="height">
      <defs>
        <path
          :id="pathId"
          :d="path"
          fill="none"
        ></path>
        <radialGradient
          :id="radialGradientId"
          cx="50%"
          cy="50%"
          fx="100%"
          fy="50%"
          r="50%"
        >
          <stop offset="0%" stop-color="white" stop-opacity="1"></stop>
          <stop offset="100%" stop-color="white" stop-opacity="0"></stop>
        </radialGradient>
        <mask :id="maskId">
          <circle :r="starLength" cx="0" cy="0" :fill="`url(#${radialGradientId})`">
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
        :href="`#${pathId}`"
        :stroke="lineColor"
        stroke-width="1"
      />
      <use
        :href="`#${pathId}`"
        :stroke="starColor"
        stroke-width="3"
        :mask="`url(#${maskId})`"
      />
    </svg>
    <div class="imooc-fly-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed, getCurrentInstance } from 'vue'
import { v4 as uuidv4 } from 'uuid'
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
    const uuid = uuidv4()
    const width = ref(0)
    const height = ref(0)
    const refName= 'imoocFlyBox'
    const pathId = `${refName}-path-${uuid}`
    const radialGradientId = `${refName}-radial-gradient-${uuid}`
    const maskId = `${refName}-mask-${uuid}`

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
      refName,
      pathId,
      radialGradientId,
      maskId
    }
  }
}
</script>

<style lang="scss" scoped>
.imooc-fly-box {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 5px;
  box-sizing: border-box;
  background: #424446;
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(0,0,0,.3);

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
    /* padding: 5px;
    box-sizing: border-box; */
  }
}
</style>
