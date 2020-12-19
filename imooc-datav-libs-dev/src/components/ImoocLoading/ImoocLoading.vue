<template>
  <div class="imooc-loading">
    <svg :width="width" :height="height" viewBox="0 0 50 50" preserveAspectRatio="xMidYMid meet">
      <!--
        stroke-dasharray = 2 * PI * R / 4 = 2*3.1415*22 / 4 = 34.56
        外圆 34.56
        内圆 18.85

        from="0 25 25" to="360 25 25"  等价于 values="0 25 25; 360 25 25"
      -->
      <!-- 外圆 -->
      <circle
        cx="25"
        cy="25"
        r="22"
        fill="none"
        stroke-width="3"
        :stroke="outsideColor"
        stroke-dasharray="34.56"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 25 25; 360 25 25"
          :dur="`${duration}s`"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke"
          :values="outsideColorAnimation"
          :dur="`${+duration * 2}s`"
          repeatCount="indefinite"
        />
      </circle>
      <!-- 内圆 -->
      <circle
        cx="25"
        cy="25"
        r="12"
        fill="none"
        stroke-width="3"
        :stroke="insideColor"
        stroke-dasharray="18.85"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="360 25 25; 0 25 25"
          :dur="`${duration}s`"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke"
          :values="insideColorAnimation"
          :dur="`${+duration * 2}s`"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
    <div class="imooc-loading-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'ImoocLoading',
  props: {
    width: {
      type: [Number, String],
      default: 50
    },
    height: {
      type: [Number, String],
      default: 50
    },
    outsideColor: {
      type: String,
      default: '#3be6cb'
    },
    insideColor: {
      type: String,
      default: '#02bcef'
    },
    duration: {
      type: [Number, String],
      default: 2
    }
  },
  setup(props) {
    const outsideColorAnimation = computed(() => `${props.outsideColor}; ${props.insideColor}; ${props.outsideColor}`)
    const insideColorAnimation = computed(() => `${props.insideColor}; ${props.outsideColor}; ${props.insideColor}`)

    return {
      outsideColorAnimation,
      insideColorAnimation
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
