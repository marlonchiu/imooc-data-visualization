<template>
  <div class="icon-wrapper" :style="{ ...style }">
    <svg class="icon">
      <use :href="iconName"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: String,
    prefix: {
      type: String,
      default: 'icon'
    },
    style: Object
  },
  setup (props) {
    const iconName = `#${props.prefix}${props.name}`

    return {
      iconName
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-wrapper {
  display: inline-block;
}
.icon {
  /* width: 1em;
  height: 1em; */
  width: 100%;
  height: 100%;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
