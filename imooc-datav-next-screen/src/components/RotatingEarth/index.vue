<template>
  <div class="rotating-earth">
    <vue-next-echarts :options="options"/>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
// import * as echarts from 'echarts'
import 'echarts-gl'

const ROOT_PATH = './'
// import glTexture from '@/assets/datav-gl-texture.jpg'

export default {
  name: 'RotatingEarth',
  setup () {
    const options = ref({})

    const update = () => {
      options.value = {
        globe: {
          // 使用地球的纹理图片 'https://www.youbaobao.xyz/datav-res/datav/datav-gl-texture.jpg'
          // TODO 配置地球的纹理
          baseTexture: `${ROOT_PATH}assets/datav-gl-texture.jpg`,
          // baseTexture: glTexture
          // TODO 配置环境贴图
          environment: `${ROOT_PATH}assets/star-bg.jpg`,
          // environment: '#000',
          // environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          //   offset: 0, color: '#00aaff' // 天空颜色
          // }, {
          //   offset: 0.7, color: '#998866' // 地面颜色
          // }, {
          //   offset: 1, color: '#998866' // 地面颜色
          // }], false)
          // TODO 地球的高度纹理
          heightTexture: `${ROOT_PATH}assets/datav-gl-texture.jpg`,
          // TODO 地球顶点位移的大小, 使地球更加立体
          displacementScale: 0.04,
          // TODO 地球中三维图形的着色效果
          shading: 'realistic',
          // TODO 配置真实感材质相关
          realisticMaterial: {
            roughness: 0.9
          },
          // TODO 后处理特效
          postEffect: {
            enable: true
          },
          // TODO 配置光源
          light: {
            main: {
              intensity: 6,
              shadow: true
            },
            ambient: {
              intensity: 1
            }
          }
        }
      }
    }

    // onMounted(() => {
    //   update()
    // })
    onMounted(update)
    return {
      options
    }
  }
}
</script>

<style lang="scss" scoped>
.rotating-earth {
  width: 100%;
  height: 100%;
}
</style>
