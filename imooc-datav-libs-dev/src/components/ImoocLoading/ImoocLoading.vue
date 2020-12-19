<template>
  <div class="imooc-loading">
    <svg width="200" height="200" viewBox="0 0 50 50">
      <!--
        stroke-dasharray = 2 * PI * R / 4 = 2*3.1415*22 / 4 = 34.56
        外圆 34.56
        内圆 18.85

        from="0 25 25" to="360 25 25"  等价于 values="0 25 25; 360 25 25"
      -->
      <circle
        cx="25"
        cy="25"
        r="22"
        fill="none"
        stroke-width="3"
        stroke="#3be6cb"
        stroke-dasharray="34.56"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 25 25; 360 25 25"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke"
          values="#3be6cb; #02bcef; #3be6cb"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx="25"
        cy="25"
        r="12"
        fill="none"
        stroke-width="3"
        stroke="#02bcef"
        stroke-dasharray="18.85"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="360 25 25; 0 25 25"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke"
          values="#02bcef; #3be6cb; #02bcef"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ImoocLoading'
}
</script>

<style lang="scss" scoped>
</style>
