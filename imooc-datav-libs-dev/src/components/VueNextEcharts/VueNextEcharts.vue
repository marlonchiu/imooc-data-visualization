<template>
  <div class="echarts" />
</template>

<script>
import Echarts from 'echarts'
import { onMounted, watch } from 'vue'

export default {
  name: 'VueNextEcharts',
  props: {
    options: Object,
    theme: [String, Object]
  },
  setup (props) {
    let dom, chart

    const initChart = () => {
      if (!chart) {
        dom = document.getElementsByClassName('echarts')[0]
        chart = Echarts.init(dom, props.theme)
      }
      chart.setOption(props.options, props.theme)
    }

    onMounted(() => {
      initChart()
    })

    watch(() => props.options, () => {
      initChart()
    })
  }
}
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
