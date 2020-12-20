<template>
  <div id="imooc-container" :ref="refName">
    <slot></slot>
  </div>
</template>

<script>
import { ref, onMounted, computed, getCurrentInstance } from 'vue'

export default {
  name: 'ImoocContainer',
  props: {
    options: Object
  },
  setup (props) {
    const refName = 'imoocContainer'
    // 容器宽高
    const width = ref(0)
    const height = ref(0)
    // 视口宽高
    const originalWidth = ref(0)
    const originalHeight = ref(0)

    console.log('props: ', props)
    onMounted(() => {
      const instance = getCurrentInstance()
      const dom = instance.ctx.$refs[refName]
      if (props.options && props.options.width && props.options.height) {
        width.value = props.options.width
        height.value = props.options.height
      } else {
        width.value = dom.clientWidth
        height.value = dom.clientHeight
      }
      // 避免反复计算
      if (!originalWidth.value || !originalHeight.value) {
        originalWidth.value = window.screen.width
        originalHeight.value = window.screen.height
      }
      console.log(width.value, height.value)
      console.log(window.screen)
      console.log(originalWidth.value, originalHeight.value)
    })


    return {
      refName,
      width,
      height
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
