<template>
  <div class="sales-line">
    <div class="sales-line-inner">
      <vue-echarts :options="options" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SalesLine',
  data () {
    return {
      options: {}
    }
  },
  mounted () {
    this.options = {
      title: {
        text: '分时访问&成交趋势图',
        textStyle: {
          color: '#fff'
        },
        left: 10,
        top: 10
      },
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '3%',
        right: '5%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['00:00', '08:00', '16:00', '24:00'],
        axisLabel: {
          color: 'rgba(255,255,255,.3)'
        },
        axisLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: 'rgba(255,255,255,.3)'
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        }
      },
      series: [
        {
          name: '访问量',
          type: 'line',
          smooth: true,
          itemStyle: {
            opacity: 0,
            color: 'rgb(0, 163, 233)'
          },
          data: [151, 532, 901, 344]
        },
        {
          name: '成交量',
          type: 'line',
          smooth: true,
          itemStyle: {
            opacity: 0,
            color: 'yellow'
          },
          data: [320, 1732, 501, 334]
        },
        {
          name: 'KPI',
          type: 'line',
          smooth: true,
          itemStyle: {
            opacity: 0,
            color: 'red'
          },
          data: [900, 900, 900, 900]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.sales-line {
  position: absolute;
  top: 950px;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 500px;
  padding: 25px 25px 0;
  box-sizing: border-box;

  .sales-line-inner {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.05);
  }
}
</style>
