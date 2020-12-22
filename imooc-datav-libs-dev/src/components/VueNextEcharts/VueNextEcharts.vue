<template>
  <div :class="[uuidChart, 'echarts']" />
</template>

<script>
import Echarts from 'echarts'
import { onMounted, watch } from 'vue'
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'VueNextEcharts',
  props: {
    options: Object,
    theme: [String, Object]
  },
  setup (props) {
    let dom, chart
    const uuidChart = `echarts-${uuidv4()}`

    const initChart = () => {
      if (!chart) {
        dom = document.getElementsByClassName(uuidChart)[0]
        chart = Echarts.init(dom, props.theme)
      }
      chart && chart.setOption(props.options, true)
    }

    onMounted(() => {
      initChart()
    })

    watch(() => props.options, () => {
      initChart()
    })

    return {
      uuidChart
    }
  }
}
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
