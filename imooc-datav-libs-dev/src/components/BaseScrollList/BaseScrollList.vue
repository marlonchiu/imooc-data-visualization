<template>
 <div :id="id" class="base-scroll-list">
   <div
     class="base-scroll-list-header"
     :style="{
        backgroundColor: actualConfig.headerBg,
        height: `${actualConfig.headerHeight}px`,
        fontSize: `${actualConfig.headerFontSize}px`,
        color: actualConfig.headerColor
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
       :align="aligns[index]"
     >
     </div>
   </div>
   <div
     class="base-scroll-list-rows"
     v-for="(rowData, rowIndex) in rowsData"
     :key="rowData + rowIndex"
     :style="{
       height: `${rowHeights[rowIndex]}px`,
       lineHeight: `${rowHeights[rowIndex]}px`,
       backgroundColor: rowIndex % 2 === 0 ? rowBg[1] : rowBg[0],
       fontSize: `${actualConfig.rowFontSize}px`,
       color: actualConfig.rowColor
     }"
   >
     <div
       class="base-scroll-list-columns base-scroll-list-text"
       v-for="(colData, colIndex) in rowData"
       :key="colData + colIndex"
       :style="{
         width: `${columnWidths[colIndex]}px`,
         ...rowStyle[colIndex]
       }"
       v-html="colData"
       :align="aligns[colIndex]"
     >
     </div>
   </div>
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
  // 行样式，格式：[{},{},{}]
  rowStyle: [],
  // 行背景色
  rowBg: [],
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
  },
  // 行序号内容展示样式
  rowIndexStyle: {
    width: '50px'
  },
  // 表格数据项
  rowsData: [],
  // 要显示行数(每页数据量)
  rowNum: 0,
  // 居中方式
  aligns: [],
  // 标题字体大小
  headerFontSize: 28,
  // 行字体大小
  rowFontSize: 28,
  // 标题字体颜色
  headerColor: '#fff',
  // 行字体颜色
  rowColor: '#000',
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
    const rowStyle = ref([])
    const rowBg = ref([])
    const columnWidths = ref([])
    const rowHeights = ref([])
    const rowsData = ref([])
    const rowNum = ref(defaultConfig.rowNum)
    const aligns = ref([])

    const handleHeader = (config) => {
      const _headerData = cloneDeep(config.headerData)
      const _headerStyle = cloneDeep(config.headerStyle)
      const _rowStyle = cloneDeep(config.rowStyle)
      const _rowsData = cloneDeep(config.rowsData)
      const _aligns = cloneDeep(config.aligns)

      if (_headerData.length === 0) {
        return false
      }
      if (config.headerIndex) {
        _headerData.unshift(config.headerIndexContent)
        _headerStyle.unshift(config.headerIndexStyle)
        _rowStyle.unshift(config.rowIndexStyle)
        _rowsData.forEach((rows, index) => {
          rows.unshift(index + 1)
        })
        _aligns.unshift('center')
      }

      // 动态计算header 中每一列的宽度
      let usedWidth = 0
      let usedColumnNum = 0
      // 判断是否自定义width
      _headerStyle.forEach((style, index) => {
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
      _headerStyle.forEach((style, index) => {
        // 如果自定义width，则按照自定义width进行渲染
        if (style.width) {
          const headerWidth = +style.width.replace('px', '')
          _columnWidths[index] = headerWidth
        }
      })

      columnWidths.value = _columnWidths
      headerData.value = _headerData
      headerStyle.value = _headerStyle
      rowStyle.value = _rowStyle
      rowsData.value = _rowsData

      aligns.value = _aligns
    }

    const handleRows = (config) => {
      console.log(config)
      const { headerHeight } = config
      rowNum.value = config.rowNum
      const unusedHeight = height.value - headerHeight
      let avgHeight
      // 如果rowNum大于实际数据长度，则以实际数据长度为准
      if (rowNum.value > rowsData.value.length) {
        rowNum.value = rowsData.value.length
      }
      avgHeight = unusedHeight / rowNum.value
      rowHeights.value = new Array(rowNum.value).fill(avgHeight)

      // 获取行背景色
      if (config.rowBg) {
        rowBg.value = config.rowBg
      }
    }

    onMounted(() => {
      const _actualConfig = assign(defaultConfig, props.config)
      // 赋值 rowsData
      rowsData.value = _actualConfig.rowsData || []
      handleHeader(_actualConfig)
      handleRows(_actualConfig)
      actualConfig.value = _actualConfig
    })

    return {
      id,
      actualConfig,
      headerData,
      headerStyle,
      rowStyle,
      rowBg,
      aligns,
      columnWidths,
      rowHeights,
      rowsData
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
    font-size: 15px;

    .header-item {}
  }

  .base-scroll-list-rows {
    display: flex;
    align-items: center;
    //transition: all 0.3s linear;

    .base-scroll-list-columns {
      height: 100%;
    }
  }
}
</style>
