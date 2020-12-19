<template>
  <div class="imooc-fly-box">
    <svg width="400" height="400" viewBox="0 0 400 400">
      <defs>
        <path
          id="fly-box-path"
          d="M5 5 L395 5 L395 395 L5 395 Z"
          fill="none"
        ></path>
        <mask id="fly-box-mask">
          <circle r="150" cx="0" cy="0" fill="white">
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
