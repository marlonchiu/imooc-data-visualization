<template>
  <svg width="0" height="0">
    <defs>
      <symbol id="more" viewBox="0 0 100 100">
        <circle r="5" cx="20" cy="25" fill="currentColor" />
        <circle r="5" cx="20" cy="50" fill="currentColor" />
        <circle r="5" cx="20" cy="75" fill="currentColor" />
        <line x1="40" y1="25" x2="90" y2="25" stroke-width="8" stroke="currentColor" />
        <line x1="40" y1="50" x2="90" y2="50" stroke-width="8" stroke="currentColor" />
        <line x1="40" y1="75" x2="90" y2="75" stroke-width="8" stroke="currentColor" />
      </symbol>
      <symbol id="filledArrowRight" viewBox="0 0 100 100">
        <polyline points="30 20, 70 50, 30 80" fill="currentColor"></polyline>
      </symbol>
      <symbol id="arrowRight" viewBox="0 0 100 100">
        <polyline points="30 20, 70 50, 30 80" fill="transparent" stroke="currentColor" stroke-width="4"></polyline>
      </symbol>
    </defs>
  </svg>
</template>

<script>
export default {
  name: 'SvgComponent'
}
</script>

<style lang="scss" scoped>
</style>
