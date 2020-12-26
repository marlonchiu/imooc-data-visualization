<template>
 <div :id="id" class="base-scroll-list">
   <div
     class="base-scroll-list-header"
     :style="{
        backgroundColor: config.headerBg,
        height: `${config.headerHeight}px`
     }"
   >
     <div
       class="header-item base-scroll-list-text"
       v-for="(headerItem, index) in headerData"
       :key="headerItem + index"
       :style="{
         width: `${columnWidths[index]}px`,
         ...headerStyle[index]
       }"
       v-html="headerItem"
     >

     </div>
   </div>
   <div class="base-scroll-list-rows"></div>
 </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { useScreen } from '../../hooks/useScreen'
import cloneDeep from 'lodash/cloneDeep'
import assign from 'lodash/assign'

const defaultConfig = {
  // 标题数据，格式：['a','b','c']
  headerData: [],
  // 标题样式，格式：[{},{},{}]
  headerStyle: [],
  // 标题背景颜色
  headerBg: 'rgb(90, 90, 90)',
  // 标题背景颜色
  headerHeight: 32,
  // 标题是否展示序号
  headerIndex: false,
  // 标题序号展示内容
  headerIndexContent: '#',
  // 标题序号展示样式
  headerIndexStyle: {
    width: '50px'
  }
}

export default {
  name: 'BaseScrollList',
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  setup (props) {
    const id = `base-scroll-list-${uuidv4()}`
    const { width, height } = useScreen(id)
    const actualConfig = ref({})

    const headerData = ref([])
    const headerStyle = ref([])
    const columnWidths = ref([])

    const handleHeader = (config) => {
      const _headerData = cloneDeep(config.headerData)
      const _headerStyle = cloneDeep(config.headerStyle)

      if (_headerData.length === 0) {
        return false
      }
      if (config.headerIndex) {
        _headerData.unshift(config.headerIndexContent)
        _headerStyle.unshift(config.headerIndexStyle)
      }
      // 动态计算header 中每一列的宽度
      let usedWidth = 0
      let usedColumnNum = 0
      // 判断是否自定义width
      _headerStyle.forEach(style => {
        // 如果自定义width，则按照自定义width进行渲染
        if (style.width) {
          usedWidth += +style.width.replace('px', '')
          usedColumnNum++
        }
      })
      // 动态计算列宽时，使用剩余的宽度除以剩余的列数
      const headerLen = _headerData.length
      const avgWidth = (width.value - usedWidth) / (headerLen - usedColumnNum)
      const _columnWidths = new Array(headerLen).fill(avgWidth)
      columnWidths.value = _columnWidths

      headerData.value = _headerData
      headerStyle.value = _headerStyle
    }

    onMounted(() => {
      const _actualConfig = assign(defaultConfig, props.config)
      handleHeader(_actualConfig)
      actualConfig.value = _actualConfig
    })

    return {
      id,
      headerData,
      headerStyle,
      columnWidths
    }
  }
}
</script>

<style lang="scss" scoped>
.base-scroll-list {
  width: 100%;
  height: 100%;

  .base-scroll-list-text {
    padding: 0 10px;
    box-sizing: border-box;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .base-scroll-list-header {
    display: flex;
    align-items: center;

    .header-item {
      width: 150px;
    }
  }
}
</style>
