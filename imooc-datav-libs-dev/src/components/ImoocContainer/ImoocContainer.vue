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
    let context, dom

    const init = () => {
      dom = context.$refs[refName]
      // 获取大屏的真实尺寸 (不传值就是 dom元素的宽高)
      if (props.options && props.options.width && props.options.height) {
        width.value = props.options.width
        height.value = props.options.height
      } else {
        width.value = dom.clientWidth
        height.value = dom.clientHeight
      }
      //
      // 获取画布的尺寸 (避免反复计算)
      if (!originalWidth.value || !originalHeight.value) {
        originalWidth.value = window.screen.width
        originalHeight.value = window.screen.height
      }

      console.log('大屏真实尺寸', width.value, height.value)
      // console.log(window.screen)
      console.log('画布的尺寸', originalWidth.value, originalHeight.value)
    }

    const updateSize = () => {
      if (width.value && height.value) {
        dom.style.width = `${width.value}px`
        dom.style.height = `${height.value}px`
      } else {
        dom.style.width = `${originalWidth.value}px`
        dom.style.height = `${originalHeight.value}px`
      }
    }

    const updateScale = () => {
      // document.body 获取当前展示区域的宽高
      const currentWidth = document.body.clientWidth
      const currentHeight = document.body.clientHeight
      console.log('展示区域的宽高 ', currentWidth, currentHeight)
      // 获取大屏最终真实的宽高
      const realWidth = width.value || originalWidth.value
      const realHeight = height.value || originalHeight.value
      console.log('获取大屏真实的宽高 ', realWidth, realHeight)
      const widthScale = currentWidth / realWidth
      const heightScale = currentHeight / realHeight
      dom.style.transform = `scale(${widthScale}, ${heightScale})`
    }

    onMounted(() => {
      const instance = getCurrentInstance()
      context = instance.ctx
      init()
      updateSize()
      updateScale()
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
#imooc-container {
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  transform-origin: left top;
  z-index: 999;
}
</style>
