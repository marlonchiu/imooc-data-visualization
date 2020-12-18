<template>
  <svg :style="{ ...style }">
    <use :href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: String,
    style: Object
  },
  setup (props) {
    const iconName = `#${props.name}`

    return {
      iconName
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
