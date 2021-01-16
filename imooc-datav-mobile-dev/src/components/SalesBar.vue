<template>
  <div class="sales-bar">
    <div class="sales-bar-inner">
      <vue-echarts :options="options" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SalesBar',
  data () {
    return {
      options: {}
    }
  },
  mounted () {
    this.options = {
      title: {
        text: '今日销售额：253,089.10元',
        textStyle: {
          color: '#fff'
        },
        top: 10
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        axisLabel: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        }
      },
      yAxis: {
        type: 'category',
        axisLabel: {
          color: '#fff'
        },
        data: ['南京', '深圳', '杭州', '上海', '北京', '全国']
      },
      series: [
        {
          name: '平台流量',
          type: 'bar',
          data: [68203, 73489, 79034, 204970, 231744, 630230]
        },
        {
          name: '外部流量',
          type: 'bar',
          data: [49325, 53438, 61000, 221594, 234141, 681807],
          itemStyle: {
            color: 'rgb(0, 140, 217)'
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.sales-bar {
  position: absolute;
  top: 300px;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 650px;
  padding: 25px 25px 0;
  box-sizing: border-box;

  .sales-bar-inner {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.05);
  }
}
</style>
