<template>
  <div class="home">
    <vue-echarts :options="options" />
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      options: {}
    }
  },
  mounted () {
    this.options = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 600px;
}
</style>
