<template>
  <div class="imooc-fly-box" style="background: #333;">
    <svg width="400" height="400" viewBox="0 0 400 400">
      <defs>
        <path
          id="fly-box-path"
          d="M5 5 L395 5 L395 395 L5 395 Z"
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
          <circle r="150" cx="0" cy="0" fill="url(#radial-gradient)">
            <animateMotion
              dur="3s"
              path="M5 5 L395 5 L395 395 L5 395 Z"
              rotate="auto"
              repeatCount="indefinite"
            />
          </circle>
        </mask>
      </defs>
      <use
        href="#fly-box-path"
        stroke="#235FA7"
        stroke-width="1"
      />
      <use
        href="#fly-box-path"
        stroke="#4fd2dd"
        stroke-width="3"
        mask="url(#fly-box-mask)"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ImoocFlyBox'
}
</script>

<style lang="scss" scoped>
</style>
