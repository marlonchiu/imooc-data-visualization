<template>
  <div id="imooc-container" :ref="refName">
    <template v-if="isReady">
      <slot></slot>
    </template>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, getCurrentInstance, nextTick } from 'vue'
import { debounce } from '../../utils/help'

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
    const isReady = ref(false)
    let context, dom, observer

    const initSize = () => {
      return new Promise((resolve) => {
        nextTick(() => {
          dom = context.$refs[refName]
          // 获取大屏的真实尺寸 (不传值就是 dom元素的宽高)
          if (props.options && props.options.width && props.options.height) {
            width.value = props.options.width
            height.value = props.options.height
          } else {
            width.value = dom.clientWidth
            height.value = dom.clientHeight
          }

          // 获取画布的尺寸 (避免反复计算)
          if (!originalWidth.value || !originalHeight.value) {
            originalWidth.value = window.screen.width
            originalHeight.value = window.screen.height
          }

          // console.log('大屏真实尺寸', width.value, height.value)
          // console.log(window.screen)
          // console.log('画布的尺寸', originalWidth.value, originalHeight.value)
          resolve()
        })

      })
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
      // console.log('展示区域的宽高 ', currentWidth, currentHeight)
      // 获取大屏最终真实的宽高
      const realWidth = width.value || originalWidth.value
      const realHeight = height.value || originalHeight.value
      // console.log('获取大屏真实的宽高 ', realWidth, realHeight)
      const widthScale = currentWidth / realWidth
      const heightScale = currentHeight / realHeight
      dom.style.transform = `scale(${widthScale}, ${heightScale})`
    }

    const onResize = async (e) => {
      console.log('onResize', e)
      await initSize()
      updateScale()
    }

    const initMutationObserver = () => {
      // https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver
      const MutationObserver = window.MutationObserver
      // 创建一个观察器实例并传入回调函数
      observer = new MutationObserver(onResize)
      // 配置开始观察目标节点 dom
      // 观察器的配置（需要观察什么变动）
      const options = { attributes: true, attributeFilter: ['style'], attributeOldValue: true }
      observer.observe(dom, options)
    }

    const removeMutationObserver = () => {
      if (observer) {
        observer.disconnect()
        observer.takeRecords()
        observer = null
      }
    }

    onMounted(async () => {
      isReady.value = false
      const instance = getCurrentInstance()
      context = instance.ctx
      await initSize()
      updateSize()
      updateScale()
      // 此处使用 debounce 会产生一个 页面元素先放大后缩小的效果，最终保持不变（延迟执行导致的）
      window.addEventListener('resize', debounce(100, onResize))
      // 查看 vue3 中所有的方法
      // console.log(require('vue'))
      initMutationObserver()
      isReady.value = true
    })

    onUnmounted(() => {
      window.removeEventListener('resize', onResize)
      removeMutationObserver()
    })

    return {
      refName,
      isReady
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
